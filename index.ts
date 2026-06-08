#!/usr/bin/env node
import Koa from 'koa';
import route from 'koa-route';
import helmet from 'koa-helmet';
import pino from 'pino';
import { fileURLToPath } from 'url';
import type { Server } from 'http';
import * as api from './api/index.js';

const logger = pino();
const app = new Koa();

app.use(helmet());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
    ctx.app.emit('error', err, ctx);
  }
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  logger.info({ method: ctx.method, url: ctx.url, status: ctx.status, ms: Date.now() - start });
});

app.on('error', (err: Error) => {
  logger.error(err);
});

app.use(route.get('/healthz', (ctx) => { ctx.status = 200; }));
app.use(route.get('/kick/:it', api.kick));

export default app;

/* c8 ignore start */
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT) || 3000;
  const server = app.listen(port);

  function createShutdownHandler(srv: Server) {
    let exiting = false;
    return () => {
      if (exiting) return;
      exiting = true;
      srv.close(() => process.exit(0));
      setTimeout(() => process.exit(1), 10_000).unref();
    };
  }

  const exit = createShutdownHandler(server);
  process.on('SIGTERM', exit);
  process.on('SIGINT', exit);
}
/* c8 ignore stop */
