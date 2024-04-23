import {describe, expect, test} from '@jest/globals';
import {add} from '../src/lib/base.js';


  test('adds 3 + 4 to equal 7', () => {
    expect(add(3, 4)).toBe(7);
  });
