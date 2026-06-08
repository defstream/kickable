#!/usr/bin/env node
import Koa from 'koa';
import route from 'koa-route';
import * as api from './api/index.js';

const app = new Koa();

app.use(route.get('/kick/:it', api.kick));

app.listen(3000);
