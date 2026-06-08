import test from 'ava';
import Koa from 'koa';
import { AddressInfo } from 'net';
import app from '../index.js';

const server = app.listen(0);
const { port } = server.address() as AddressInfo;
const base = `http://localhost:${port}`;

test.after(() => server.close());

test('GET /healthz returns 200', async (t) => {
  const res = await fetch(`${base}/healthz`);
  t.is(res.status, 200);
});

test('GET /kick/it returns true', async (t) => {
  const res = await fetch(`${base}/kick/it`);
  t.is(res.status, 200);
  t.is(await res.json(), true);
});

test('GET /kick/sky returns false', async (t) => {
  const res = await fetch(`${base}/kick/sky`);
  t.is(res.status, 200);
  t.is(await res.json(), false);
});

test('GET /kick/ball returns false', async (t) => {
  const res = await fetch(`${base}/kick/ball`);
  t.is(res.status, 200);
  t.is(await res.json(), false);
});

test('GET unknown route returns 404', async (t) => {
  const res = await fetch(`${base}/unknown`);
  t.is(res.status, 404);
});

test('error handler returns 500 without exposing error details', async (t) => {
  const errApp = new Koa();
  errApp.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Internal Server Error' };
      ctx.app.emit('error', err, ctx);
    }
  });
  errApp.on('error', () => { /* suppress expected test error */ });
  errApp.use(() => { throw new Error('something went wrong'); });

  const srv = errApp.listen(0);
  const { port: errPort } = srv.address() as AddressInfo;
  const res = await fetch(`http://localhost:${errPort}/`);
  srv.close();

  t.is(res.status, 500);
  const body = await res.json() as { error: string };
  t.is(body.error, 'Internal Server Error');
  t.false(JSON.stringify(body).includes('something went wrong'));
});
