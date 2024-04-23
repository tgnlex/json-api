import {jest, expect, test} from '@jest/globals';
import {getDate, getTime, timestamp, logTimestamp} from '../src/lib/datetime.js';
  const testDate = new Date;

test('tests that getDate returns current date', () => {
  expect(getDate()).toBe(testDate.toLocaleDateString());
});
test('tests that getTime returns current time', () => {
  expect(getTime()).toBe(testDate.toLocaleTimeString());
});
test('tests that timestamp returns current date and time', () => {
  expect(timestamp()).toBe(testDate.toLocaleString());
});
test('test that logtimestamp logs a timestamp', () => {
  expect(logTimestamp()).toBe(console.log('[LIB]', `Timestamp: ${timestamp}`))
})