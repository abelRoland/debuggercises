# Debuggercises 

<<<<<<< HEAD:review/08-block-scope/3-assign-values/README.md
> 6/19/2020, 2:30:45 PM 
=======
> 6/21/2020, 9:05:10 AM 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/09-block-scope/3-assign-values/README.md

## [exercises](../../README.md)/[09-block-scope](../README.md)/3-assign-values 

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 
- [/3.js](#3js) - _pass_ 
---

## /1.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/3-assign-values/1.js)

```txt
<<<<<<< HEAD:review/08-block-scope/3-assign-values/README.md
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
=======
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/09-block-scope/3-assign-values/1.js:3:11)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/09-block-scope/3-assign-values/README.md
```

```js
'use strict';

const a = '12';
console.assert(a === '12', 'Test 1');
{
  const a = true;
  console.assert(a === true, 'Test 2');
}
console.assert(a === '12', 'Test 3');

```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/3-assign-values/2.js)

```txt
<<<<<<< HEAD:review/08-block-scope/3-assign-values/README.md
+ PASS: Test 1: x
+ PASS: Test 2: x
+ PASS: Test 3: y
+ PASS: Test 4: x
=======
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/09-block-scope/3-assign-values/2.js:3:9)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/09-block-scope/3-assign-values/README.md
```

```js
'use strict';

let x = null;
console.assert(x === null, 'Test 1: x');
{
  x = false;
  const y = null;

  console.assert(x === false, 'Test 2: x');
  console.assert(y === null, 'Test 3: y');
}
console.assert(x === false, 'Test 4: x');

```

[TOP](#debuggercises)

---

## /3.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/3-assign-values/3.js)

```txt
<<<<<<< HEAD:review/08-block-scope/3-assign-values/README.md
+ PASS: Test 1: m
+ PASS: Test 2: m
+ PASS: Test 3: l
+ PASS: Test 4: m
=======
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/09-block-scope/3-assign-values/3.js:3:9)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/09-block-scope/3-assign-values/README.md
```

```js
'use strict';

let m = 'tall';
console.assert(m === 'tall', 'Test 1: m');
{
  let l = 'small';
  const m = 'short';
  l = 'mini';
  console.assert(m === 'short', 'Test 2: m');
  console.assert(l === 'mini', 'Test 3: l');
}
m = 'medium';
console.assert(m === 'medium', 'Test 4: m');

```

[TOP](#debuggercises)
