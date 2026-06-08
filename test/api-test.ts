import test from 'ava';
import * as api from '../api/index.js';
import { Context } from 'koa';

function kick(it: string | null): Context {
    const ctx = {} as unknown as Context;
    api.kick(ctx, it);
    return ctx;
}

test("null", (t) => {
    const res = kick(null);
    t.is(res.body, false);
});

test("empty", (t) => {
    const res = kick("");
    t.is(res.body, false);
});

test("successful", (t) => {
    const res = kick("it");
    t.is(res.body, true);
});

test.skip("case sensitive", (t) => {
    const res = kick("IT");
    t.is(res.body, true);
});
