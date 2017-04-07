#!/usr/bin/env node
/*jslint node: true */
/*global module, require*/

'use strict';

const Koa = require('koa');
const route = require('koa-route');
const api = require('./api')

const app = new Koa();

app.use(route.get('/kick/:it', api.kick));

app.listen(3000);
