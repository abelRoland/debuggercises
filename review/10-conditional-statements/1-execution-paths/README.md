# Debuggercises 

<<<<<<< HEAD:review/09-conditionals/1-execution-paths/README.md
> 6/19/2020, 2:30:45 PM 
=======
> 6/21/2020, 9:05:10 AM 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/10-conditional-statements/1-execution-paths/README.md

## [exercises](../../README.md)/[10-conditional-statements](../README.md)/1-execution-paths 

- [/1-write-expected.js](#1-write-expectedjs) - _pass_ 
- [/2-write-arguments.js](#2-write-argumentsjs) - _pass_ 
- [/3-write-arguments.js](#3-write-argumentsjs) - _fail_ 
- [/4-write-function.js](#4-write-functionjs) - _pass_ 
- [/5-write-function.js](#5-write-functionjs) - _pass_ 
---

## /1-write-expected.js 

> pass 
>
> [review source](../../../exercises/10-conditional-statements/1-execution-paths/1-write-expected.js)

```txt
<<<<<<< HEAD:review/09-conditionals/1-execution-paths/README.md
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
=======
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/10-conditional-statements/1-execution-paths/1-write-expected.js:14:19)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/10-conditional-statements/1-execution-paths/README.md
```

```js
const mystery = (a, b) => {
  let result = '';
  if (a && b) {
    result = 'path 1';
  } else if (!a && !b) {
    result = 'path 2';
  } else {
    result = 'path 3';
  }
  return result;
};


const _1_expect = 'path 2';
const _1_actual = mystery(0, null);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 3';
const _2_actual = mystery(false, 'hello');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'path 3';
const _3_actual = mystery(true, undefined);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'path 1';
const _4_actual = mystery(1, -1);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'path 2';
const _5_actual = mystery('', '');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 1';
const _6_actual = mystery('_6_expect', '_6_actual');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 'path 3';
const _7_actual = mystery(0, 12);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 2';
const _8_actual = mystery(null, undefined);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'path 3';
const _9_actual = mystery(NaN, Infinity);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /2-write-arguments.js 

> pass 
>
> [review source](../../../exercises/10-conditional-statements/1-execution-paths/2-write-arguments.js)

```txt
<<<<<<< HEAD:review/09-conditionals/1-execution-paths/README.md
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
=======
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/10-conditional-statements/1-execution-paths/2-write-arguments.js:15:27)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/10-conditional-statements/1-execution-paths/README.md
```

```js
const mystery = (a, b) => {
  let result = '';
  if (typeof a === b) {
    result = 'path 1';
  } else if (a === typeof b) {
    result = 'path 2';
  } else {
    result = 'path 3';
  }
  return result;
};

// path 1
const _1_expect = 'path 1';
const _1_actual = mystery('', 'string');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 1';
const _2_actual = mystery(5, 'number');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'path 1';
const _3_actual = mystery(true, 'boolean');
console.assert(_3_actual === _3_expect, 'Test 3');

// path 2
const _4_expect = 'path 2';
const _4_actual = mystery('string', ' ');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'path 2';
const _5_actual = mystery('undefined', undefined);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 2';
const _6_actual = mystery('number', 6);
console.assert(_6_actual === _6_expect, 'Test 6');

// path 3
const _7_expect = 'path 3';
const _7_actual = mystery(true, 'string');
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 3';
const _8_actual = mystery(7, 'sasf');
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'path 3';
const _9_actual = mystery(undefined, 7);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /3-write-arguments.js 

> fail 
>
> [review source](../../../exercises/10-conditional-statements/1-execution-paths/3-write-arguments.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
+ PASS: Test 5
+ PASS: Test 6
- FAIL: Test 7
+ PASS: Test 8
```

```js
const mystery = (a, b) => {
  let result = '';
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      result = 'path 1';
    } else {
      result = 'path 2';
    }
  } else {
    if (typeof a === typeof b) {
      result = 'path 3';
    } else {
      result = 'path 4';
    }
  }
  return result;
};

// path 1
const _1_expect = 'path 1';
const _1_actual = mystery(0, null);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 1';
const _2_actual = mystery(false, 'hello');
console.assert(_2_actual === _2_expect, 'Test 2');

// path 2
const _3_expect = 'path 2';
const _3_actual = mystery(true, undefined);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'path 2';
const _4_actual = mystery(1, -1);
console.assert(_4_actual === _4_expect, 'Test 4');

// path 3
const _5_expect = 'path 3';
const _5_actual = mystery('', '');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 3';
const _6_actual = mystery('_6_expect', '_6_actual');
console.assert(_6_actual === _6_expect, 'Test 6');

// path 4
const _7_expect = 'path 4';
const _7_actual = mystery(0, 12);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 4';
const _8_actual = mystery(null, undefined);
console.assert(_8_actual === _8_expect, 'Test 8');

```

[TOP](#debuggercises)

---

## /4-write-function.js 

> pass 
>
> [review source](../../../exercises/10-conditional-statements/1-execution-paths/4-write-function.js)

```txt
<<<<<<< HEAD:review/09-conditionals/1-execution-paths/README.md
+ PASS: Test 01
+ PASS: Test 02
+ PASS: Test 03
+ PASS: Test 04
+ PASS: Test 05
+ PASS: Test 06
+ PASS: Test 07
+ PASS: Test 08
+ PASS: Test 09
+ PASS: Test 10
+ PASS: Test 11
+ PASS: Test 12
=======
UNCAUGHT: ReferenceError: _ is not defined
    at mystery (  ...  /exercises/10-conditional-statements/1-execution-paths/4-write-function.js:3:3)
    at Object.<anonymous> (  ...  /exercises/10-conditional-statements/1-execution-paths/4-write-function.js:17:20)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1) 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/10-conditional-statements/1-execution-paths/README.md
```

```js
const mystery = (a, b) => {
  let result = '';
  if ( Boolean(a) === Boolean(b) && Boolean(a) === true ) {
    result = 'path 1';
  } else if ( Boolean(a) === Boolean(b) && Boolean(a) === false ) {
    result = 'path 2';
  } else if (Boolean(a) !== Boolean(b) && typeof a === typeof b) {
    result = 'path 3';
  } else {
    result = 'path 4';
  }
  return result;
};

// path 1
const _01_expect = 'path 1';
const _01_actual = mystery(1, 'turtle');
console.assert(_01_actual === _01_expect, 'Test 01');

const _02_expect = 'path 1';
const _02_actual = mystery('turtle', 'turtle');
console.assert(_02_actual === _02_expect, 'Test 02');

const _03_expect = 'path 1';
const _03_actual = mystery(42, true);
console.assert(_03_actual === _03_expect, 'Test 03');

// path 2
const _04_expect = 'path 2';
const _04_actual = mystery(0, '');
console.assert(_04_actual === _04_expect, 'Test 04');

const _05_expect = 'path 2';
const _05_actual = mystery(null, NaN);
console.assert(_05_actual === _05_expect, 'Test 05');

const _06_expect = 'path 2';
const _06_actual = mystery(false, false);
console.assert(_06_actual === _06_expect, 'Test 06');

// path 3
const _07_expect = 'path 3';
const _07_actual = mystery(0, 12);
console.assert(_07_actual === _07_expect, 'Test 07');

const _08_expect = 'path 3';
const _08_actual = mystery(false, true);
console.assert(_08_actual === _08_expect, 'Test 08');

const _09_expect = 'path 3';
const _09_actual = mystery('x', '');
console.assert(_09_actual === _09_expect, 'Test 09');

// path 4
const _10_expect = 'path 4';
const _10_actual = mystery('', true);
console.assert(_10_actual === _10_expect, 'Test 10');

const _11_expect = 'path 4';
const _11_actual = mystery(0, '12');
console.assert(_11_actual === _11_expect, 'Test 11');

const _12_expect = 'path 4';
const _12_actual = mystery(100, null);
console.assert(_12_actual === _12_expect, 'Test 12');

```

[TOP](#debuggercises)

---

## /5-write-function.js 

> pass 
>
> [review source](../../../exercises/10-conditional-statements/1-execution-paths/5-write-function.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
```

```js
<<<<<<< HEAD:review/09-conditionals/1-execution-paths/README.md
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
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/10-conditional-statements/1-execution-paths/README.md


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
```

[TOP](#debuggercises)
