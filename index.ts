#!/usr/bin/env node
import Koa from 'koa';
import route from 'koa-route';
import { fileURLToPath } from 'url';
import * as api from './api/index.js';

const app = new Koa();

app.use(route.get('/healthz', (ctx) => { ctx.status = 200; }));
app.use(route.get('/kick/:it', api.kick));

export default app;

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT) || 3000;
  const server = app.listen(port);
  process.on('SIGTERM', () => server.close());
}
