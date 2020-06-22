const mystery = (a, b) => {
  let result = '';
  if (typeof a === 'string' && typeof b === 'string') {
    result = 'path 3';
  } else if (Boolean(a) === true && typeof a !== 'string') {
    result = 'path 2';
 
  } else {
      
    if (typeof a === typeof b || typeof b === 'undefined') {
      result = 'path 4';
    } else {
    result = 'path 1';
    }
  }
return result;
};

// path 1 (F, F, N, O) / (F, T, B, S) / 
const _1_expect = 'path 1';
const _1_actual = mystery(0, null);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 1';
const _2_actual = mystery(false, 'hello');
console.assert(_2_actual === _2_expect, 'Test 2');

// path 2 (T, F, B, U) / (T, T, N, N)
const _3_expect = 'path 2';
const _3_actual = mystery(true, undefined);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'path 2';
const _4_actual = mystery(1, -1);
console.assert(_4_actual === _4_expect, 'Test 4');

// path 3 (F, F, S, S) / (T, T, S, S)
const _5_expect = 'path 3';
const _5_actual = mystery('', '');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 3';
const _6_actual = mystery('_6_expect', '_6_actual');
console.assert(_6_actual === _6_expect, 'Test 6');

// path 4 (F, T, N, N) / (F, F, O, U)
const _7_expect = 'path 4';
const _7_actual = mystery(0, 12);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 4';
const _8_actual = mystery(null, undefined);
console.assert(_8_actual === _8_expect, 'Test 8');
