# pretty-easy-data-types

&nbsp;

[![NPM Version][npm-image]][npm-url]
[![Build Status - Travis CI][travis-image]][travis-url]
[![Build Status - Appveyor][appveyor-image]][appveyor-url]
[![Tests][tests-image]][travis-url]
[![Dependancies][dependancy-image]][dependancy-url]

### *What is pretty-easy-data-types?*
***pretty-easy-data-types*** *is a small utility NodeJS library for checking the data type values*.

&nbsp;

# Install
This is a [NodeJS](http://www.node.js) module available through the [npm](http://npmjs.org) registry. Installation is done using the **npm install** command:
```sh
$ npm install pretty-easy-data-types
```

&nbsp;

# Usage
After installing the module (localy in your project directory), in order to use it in your file you first need to require it.
&nbsp;

You can:
 * import the whole library
```javascript
const dataTypeChecks = require('pretty-easy-data-types');
```
 * or only the components you need
```javascript
const { isString, isArray, isNull } = require('pretty-easy-data-types');
```
&nbsp;

If you use TypeScript:
 * import the whole library
```javascript
import * as dataTypeChecks from 'pretty-easy-data-types';
```
 * import the components you need
```javascript
import { isBoolean, isNumber } from 'pretty-easy-data-types';
```
&nbsp;

The library exposes a few utility functions for you to call and supply with a value for which you'd like to get it's data type or you'd like to check if it is of certain data type.

&nbsp;

## Examples

### Get data type of value
```javascript
//  Import the necessary dependancies
//  from the library
const { getType } = require('pretty-easy-data-types');

//  Perform the checks
getType('foo')                  //  'string'
getType(25)                     //  'number'
getType(false)                  //  'boolean'
getType()                       //  'undefined'
getType(null)                   //  'null'
getType(new Date())             //  'date'
getType(new Error())            //  'error'
getType(['f00', false, 2])      //  'array'
getType({bar: 'baz'})           //  'object'
```

&nbsp;

### Do NOT use built-in constructors for primitive values! (JavaScript 101)
If for some reason you do use built in constructor classes for constructing your primitive values, such as :
 * Strings,
 * Numbers and
 * Booleans

You should stop doing it asap, before your hurt somebody!
Consider the following example.

```javascript
/*
*   It has no impact on string values
*/
const myString = new String('f00');
console.log(myString);          //  'f00'
getType(myString);              //  'string'

/*
*   But do note that using the Number constructor
*   can produce some unwanted results and introduce
*   hard to trace bugs due to the quirky nature of JavaScript.
*   
*   Consider the following :
*/
const myNum = new Number('This is not a number');
console.log(myNum);         //  NaN
isNumber(myNum);            //  true
```

This is due how JavaScript language works as NaN value is treated as an instance of Number class!
That's why you should AVOID using built-in constructor classes for primitive values and just use the simpler, shorter and more conviniant way of just declaring them instead.

&nbsp;

### Check for certain data type
```javascript
//  Import the necessary dependancies
//  from library
const {
    isString, isNumber, isBoolean
    isNull, isUndefined,
    isDate, isError,
    isArray, isObject
}

isString('')            //  true
isNumber(25)            //  true
isBoolean(false)        //  true
isUndefined()           //  true
isNull(null)            //  true
isDate(new Date())      //  true
isError(new Error())    //  true
isArray(['f00'])        //  true
isObject({val: false})  //  true


/*
*   Note that objects and arrays
*   are of different data types!
*
*   This is exteremely important, and something
*   that you should be aware of
*/
const array = ['f00', 12, null]; 

isObject(array)     //  false
isArray(array)      //  true
```

&nbsp;

### Want to contribute?
**Great!**
Anyone can help make this project better - check out the [github](https://github.com/ognjenjevremovic/pretty-easy-data-types) repository!

### Found a bug?
Please open a an [issue](https://github.com/ognjenjevremovic/pretty-easy-data-types/issues).

### License
Copyright (c) 2017 [Ognjen Jevremović](https://github.com/ognjenjevremovic)

Licensed under the [MIT](https://github.com/ognjenjevremovic/pretty-easy-data-types/blob/master/LICENSE) License.

[npm-image]: https://img.shields.io/npm/v/pretty-easy-data-types.svg
[npm-url]: https://npmjs.org/package/pretty-easy-data-types
[travis-image]: https://img.shields.io/travis/ognjenjevremovic/pretty-easy-data-types/master.svg
[travis-url]: https://travis-ci.org/ognjenjevremovic/pretty-easy-data-types
[appveyor-image]: https://ci.appveyor.com/api/projects/status/y2hrdv2v9otm07f7?svg=true
[appveyor-url]: https://ci.appveyor.com/project/ognjenjevremovic/pretty-easy-data-types
[tests-image]: https://img.shields.io/badge/tests-passing-green.svg
[dependancy-image]: https://david-dm.org/ognjenjevremovic/pretty-easy-data-types/status.svg
[dependancy-url]: https://david-dm.org/ognjenjevremovic/pretty-easy-data-types