import {describe, expect, test} from '@jest/globals';
import {add, json, log, read, noop, sleep, sleepMs} from '../src/lib/base.js';
  
  test('test read returns value', () => {
    expect(read("hello world")).toBe("hello world")
  });
  
  test('tests log returns properly logged value', () => {
    expect(log("test", "hello world")).toBe(console.log("[TEST]", "hello world "));
  })

  test('adds 3 + 4 to equal 7', () => {
    expect(add(3, 4)).toBe(7);
  });

  