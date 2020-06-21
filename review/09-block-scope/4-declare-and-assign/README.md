# Debuggercises 

<<<<<<< HEAD:review/08-block-scope/4-declare-and-assign/README.md
> 6/19/2020, 2:30:45 PM 
=======
> 6/21/2020, 9:05:10 AM 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/09-block-scope/4-declare-and-assign/README.md

## [exercises](../../README.md)/[09-block-scope](../README.md)/4-declare-and-assign 

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 
- [/3.js](#3js) - _pass_ 
---

## /1.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/4-declare-and-assign/1.js)

```txt
<<<<<<< HEAD:review/08-block-scope/4-declare-and-assign/README.md
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
=======
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/09-block-scope/4-declare-and-assign/1.js:3:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/09-block-scope/4-declare-and-assign/README.md
```

```js
'use strict';

let a = false;
console.assert(a === false, 'Test 1');
{
  const a = null;
  console.assert(a === null, 'Test 2');
}
console.assert(a === false, 'Test 3');

```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/4-declare-and-assign/2.js)

```txt
<<<<<<< HEAD:review/08-block-scope/4-declare-and-assign/README.md
+ PASS: Test 1: x
+ PASS: Test 2: x
+ PASS: Test 3: y
+ PASS: Test 4: x
=======
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/09-block-scope/4-declare-and-assign/2.js:3:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/09-block-scope/4-declare-and-assign/README.md
```

```js
'use strict';

let x = 'hi!';
console.assert(x === 'hi!', 'Test 1: x');
{
  x = 'bye!';
  let y = 'hi!';

  console.assert(x === 'bye!', 'Test 2: x');
  console.assert(y === 'hi!', 'Test 3: y');
}
console.assert(x === 'bye!', 'Test 4: x');

```

[TOP](#debuggercises)

---

## /3.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/4-declare-and-assign/3.js)

```txt
<<<<<<< HEAD:review/08-block-scope/4-declare-and-assign/README.md
+ PASS: Test 1: m
+ PASS: Test 2: m
+ PASS: Test 3: l
+ PASS: Test 4: m
=======
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/09-block-scope/4-declare-and-assign/3.js:3:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/09-block-scope/4-declare-and-assign/README.md
```

```js
'use strict';

let m = 1;
console.assert(m === 1, 'Test 1: m');
{
  m = 2;
  const l = 3;
  console.assert(m === 2, 'Test 2: m');
  console.assert(l === 3, 'Test 3: l');
}
m = 4;
console.assert(m === 4, 'Test 4: m');

```

[TOP](#debuggercises)

