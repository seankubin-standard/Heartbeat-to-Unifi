import { test } from 'node:test';
import assert from 'node:assert/strict';
import { divide } from './divide.js';

test('divide(10, 2) === 5', () => {
  assert.equal(divide(10, 2), 5);
});

test('divide(1, 0) throws RangeError', () => {
  assert.throws(() => divide(1, 0), RangeError);
});
