<<<<<<< HEAD:exercises/09-conditionals/1-execution-paths/5-write-function.js
function mystery(a, b) {
    let result = '';
    if ( typeof a === typeof b ) {
      result = 'path 2';
    } else if ( Boolean(a) === false && Boolean(b) === false ) {
      result = 'path 1';
    } else {
      result = 'path 3';
    }
    return result;
}
=======
const mystery = (a, b) => {

};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/10-conditional-statements/1-execution-paths/5-write-function.js


const _1_expect = 'path 1';
const _1_actual = mystery(0, null);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 1';
const _2_actual = mystery('', undefined);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'path 1';
const _3_actual = mystery(NaN, false);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'path 2';
const _4_actual = mystery('hello', 'goodbye');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'path 2';
const _5_actual = mystery(-1, NaN);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 2';
const _6_actual = mystery(true, false);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 'path 3';
const _7_actual = mystery('hello', 100);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 3';
const _8_actual = mystery(true, null);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'path 3';
const _9_actual = mystery(0, '0');
console.assert(_9_actual === _9_expect, 'Test 9');