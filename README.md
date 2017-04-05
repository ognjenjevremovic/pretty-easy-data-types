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
$ npm install pretty-easy-data-types --save
```
***--save*** *flag is used to save the module as a project dependancy in your package.json file.*

&nbsp;

# Usage
After installing the module (localy in your project directory), in order to use it in your file you first need to require it.
&nbsp;

You can:
 * import the whole library
```javascript
const dataTypes = require('pretty-easy-data-types');
```
 * or only the components you need (recommended way)
```javascript
const { geType, isString, isArray, isNull } = require('pretty-easy-data-types');
```
&nbsp;

If you use TypeScript:
 * import the whole library
```javascript
import * as dataTypes from 'pretty-easy-data-types';
```
 * import the components you need (recommended way)
```javascript
import { getType, isBoolean, isNumber } from 'pretty-easy-data-types';
```
&nbsp;

The library exposes a few utility functions for you to call and supply with a value for which you'd like to get a data type or you'd like to check if it is of certain data type value.

&nbsp;

## Examples

### Get data type of value
```javascript
/**
*   We're going to import only the data type checker here,
*   but you're free to import the whole library and then
*   use the methods on the returned object; it's up to you
*/
const { getType } = require('pretty-easy-data-types');

//  Perform the checks
getType(['f00', false, 2])      //  'array'
getType(false)                  //  'boolean'
getType(new Date())             //  'date'
getType(new Error())            //  'error'
getType(() => {})               //  'function'
getType(null)                   //  'null'
getType(25)                     //  'number'
getType({bar: 'baz'})           //  'object'
getType('foo')                  //  'string'
getType()                       //  'undefined'
```

&nbsp;

### Do NOT use built-in constructors for primitive values! (JavaScript 101)
If for some reason you do use built in constructor classes for constructing your primitive values, such as :
 * Strings,
 * Numbers and
 * Booleans

**You should stop doing it asap, before your hurt somebody!**
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
//  Import the checks
const {
    isArray, isBoolean, isDate,
    isError, isFunction ,isNull,
    isNumber, isObject,
    isString, isUndefined
} = require('pretty-easy-data-types');

isArray([ 'f00' ])      //  true
isBoolean(false)        //  true
isDate(new Date())      //  true
isError(new Error())    //  true
isFunction(() => {})    //  true
isNull(null)            //  true
isNumber(25)            //  true
isObject({val: false})  //  true
isString('')            //  true
isUndefined()           //  true
```

&nbsp;

### Gotchas!
There are a few gotchas that you should be aware of. One of which, that objects and arrays are of different data types. This is exteremely important!
Instances of classes that derive from an Object class, such as Array, Error and Date data type values, have their own constructors - meaning, they're not instances of Object classes, but rather instances of their respective classes.

```javascript
const array = [ 'f00', 12, null ]; 

isObject(array)     //  false
isArray(array)      //  true
```

&nbsp;

## Releases
The module follows the Semantic Versioning standard to communicate what kinds of changes are introduced in the new releases.

### Versioning
*Patch releases* : n.n.**X** -> Bug fixes, documentation updates, code cleanups, new test cases, optimization stuff and other minor changes that you should probably not be aware of;
&nbsp;

*Minor releases* : n.**X**.n -> New feature(s) which don't break the existing ones. These ofter refer to minor TypeScript API changes (mainly due to declarations; JavaScript code will not be affected by these changes), code refactoring, some under the sheet changes that you should not worry about too much;
&nbsp;

*Major releases* : **X**.n.n -> Changes that could *possibly* introduce the backwards compatibility issues. These are however very ***rare*** and could be relevant to you only in the case of an endpoint API change and the way you communicate with the module.

&nbsp;

## Changelogs

&nbsp;
**04/05** - *1.1.0*
 * Update to unit test approach
 * New test cases
 * Minor improvements to the code

**03/20** - *1.0.3*
 * Documentation updates

**03/19** - *1.0.2*
 * Support for Node < 1.8 abbandoned
 * Modular approach to unit tests
 * New test cases
 * Documentation updates to reflect the changes

**03/16** - *v1.0.1*
 * Documentation updates

**03/15** - *v1.0.0*
 * Initial release


&nbsp;

### Want to contribute?
**Great!**
Anyone can help make this project better - check out the [github](https://github.com/ognjenjevremovic/pretty-easy-data-types) repository and make a pull request!

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