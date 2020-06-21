# Debuggercises 

<<<<<<< HEAD:review/08-block-scope/2-missing-variables/README.md
> 6/19/2020, 2:30:45 PM 
=======
> 6/21/2020, 9:05:10 AM 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/09-block-scope/2-missing-variables/README.md

## [exercises](../../README.md)/[09-block-scope](../README.md)/2-missing-variables 

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 
- [/3.js](#3js) - _pass_ 
---

## /1.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/2-missing-variables/1.js)

```txt
<<<<<<< HEAD:review/08-block-scope/2-missing-variables/README.md
+ PASS: Test 1
=======
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/09-block-scope/2-missing-variables/1.js:9:16)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/09-block-scope/2-missing-variables/README.md
```

```js
'use strict';

const a = 3;
let b = 3;
{
  const a = 5;
  b = a;
}
console.assert(b === 5, 'Test 1');

```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/2-missing-variables/2.js)

```txt
<<<<<<< HEAD:review/08-block-scope/2-missing-variables/README.md
+ PASS: Test 1
+ PASS: Test 2
=======
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/09-block-scope/2-missing-variables/2.js:10:16)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/09-block-scope/2-missing-variables/README.md
```

```js
'use strict';

let x = 'hi!';
let y = 'hi!';
{
  x = 'hi!';
  let y = 'bye!';
}
x = 'bye!';
console.assert(y === 'hi!', 'Test 1');
console.assert(x === 'bye!', 'Test 2');

```

[TOP](#debuggercises)

---

## /3.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/2-missing-variables/3.js)

```txt
<<<<<<< HEAD:review/08-block-scope/2-missing-variables/README.md
+ PASS: Test 1
=======
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/09-block-scope/2-missing-variables/3.js:9:16)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:119:1)
    at Module._compile (internal/modules/cjs/loader.js:1200:30) 
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:review/09-block-scope/2-missing-variables/README.md
```

```js
'use strict';

let m = 0;
{
  let l = 10;
  const m = 1;
  l = 0;
}
console.assert(m === 0, 'Test 1');

```

[TOP](#debuggercises)

