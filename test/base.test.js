import {jest, expect, test} from '@jest/globals';
import {add, nullop, json, log, read, noop, sleep, sleepMs, genElement} from '../src/lib/base.js';
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test("test that noop returns undefined", () => {
  expect(noop()).toBe(undefined);
})  
test("test that nullop returns null", () => {
  expect(nullop()).toBe(null);
})
test("test that sleep will setTimeout in seconds", () => {
  sleep(1)
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
test('test that sleepMs will setTimeout in milliseconds', () => {
  sleepMs(1000);
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
});
test('test that json returns a json string', () => {
  const data = {test: "item"}
  expect(json(data)).toBe('{\"test\":\"item\"}')
})
test('test read returns value', () => {
  expect(read("hello world")).toBe("hello world")
});
  
test('tests log returns properly logged value', () => {
  expect(log("test", "hello world")).toBe(console.log("[TEST]", "hello world "));
})

test('test that add(3 + 4) returns 7', () => {
  expect(add(3, 4)).toBe(7);
});
test('test that genElement("p", "test") returns <p>test</p>, etc...', () => {
  expect(genElement('p', 'test')).toBe('<p>test</p>');
  expect(genElement('h1', 'test2')).toBe('<h1>test2</h1>');
})
  