#!/usr/bin/env node
/*jslint node: true */
/*global module, require*/

'use strict';

const Koa = require('koa');
const route = require('koa-route');
const logger = require('koa-logger');

const api = require('./api');

const app = new Koa();
const port = process.env.PORT || 3000;

app.use(logger())
app.use(route.get('/kick/:it', api.kick));

app.listen(port);

console.log(`kickable now running on port ${port}`);