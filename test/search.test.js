import {describe, expect, test} from '@jest/globals' 
import {cleanQuery} from  '../src/lib/search.js';
  test('only the first letters are capital', () => {
    const t1 = cleanQuery('foo');
    const t2 = cleanQuery('BAR');
    expect(t1).toBe('Foo');
    expect(t2).toBe('Bar');
  });

