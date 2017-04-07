/*jslint node: true */
/*global module, require*/

'use strict';

const test = require('ava')
const api = require('../api')

function kick (it){
    var ctx = {}
    api.kick(ctx, it)
    return ctx   
}

test("null", (t) => {
    const res = kick(null)
    t.is(res.body, false)
});

test("empty", (t) => {
    const res = kick("")
    t.is(res.body, false)
});

test("successful", (t) => {
    const res = kick("it")
    t.is(res.body, true)
});

test("case sensitive", (t) => {
    const res = kick("IT")
    t.is(res.body, true)
});