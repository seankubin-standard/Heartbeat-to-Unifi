import { test } from 'node:test';
import assert from 'node:assert/strict';
import { multiply } from './multiply.js';

test('multiply(3, 4) === 12', () => {
  assert.equal(multiply(3, 4), 12);
});

test('multiply(-2, 5) === -10', () => {
  assert.equal(multiply(-2, 5), -10);
});
