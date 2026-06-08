import test from 'ava';
import { kickable } from '../api/index.js';

test('returns false for null', (t) => {
  t.false(kickable(null));
});

test('returns false for undefined', (t) => {
  t.false(kickable(undefined));
});

test('returns false for empty string', (t) => {
  t.false(kickable(''));
});

test('returns false for non-kickable word', (t) => {
  t.false(kickable('sky'));
});

test('returns true for "it"', (t) => {
  t.true(kickable('it'));
});

test.skip('returns true for "IT" (case insensitive — not yet implemented)', (t) => {
  t.true(kickable('IT'));
});
