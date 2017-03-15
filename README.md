# pretty-easy-data-types
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Tests][tests-image]][travis-url]

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
```typescript
import checks from 'pretty-easy-data-types'
```
 * import the components you need
```typescript
import { isBoolean, isNumber } from 'pretty-easy-data-types'
```
&nbsp;

The library exposes a few utility functions for you to call and supply with a value for which you'd like to get it's data type or you'd like to check if it is of certain data type.

&nbsp;

## Examples

### Get data type of value
```javascript
const { getType } = require('pretty-easy-data-types');

getType('foo')                  //  'string'
getType(25)                     //  'number'
getType(false)                  //  'boolean'
getType()                       //  'undefined'
getType(null)                   //  'null'
getType(new Date())             //  'date'
getType(new Error())            //  'error'
getType(['f00', false, 2])      //  'array'
getType({bar: 'baz'})           //  'object'

/*
*   Note that you can, if for some reason you do it that way, 
*   use the classes to construct your values for built-in data types :
*   String, Number, Array, Object, etc...
*
*   For example, the two will return the same value
*/
getType(new String('f00'));     //  'string'
getType('bar');                 //  'string'
```
&nbsp;

### Check for certain data type
```javascript
const {
    isString, isNumber, isBoolean
    isNull, isUndefined,
    isDate, isError,
    isArray, isObject
}

isString('')        //  true
isNumber(25)        //  true
/*
*   ... and so on
*
*   Note however, that objects and arrays
*   are of different data types.
*   This is exteremely important, and something
*   that you should be aware of!
*/
isObject(['f00', 12, null])     //  false
isArray(['f00', 12, null])      //  true
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
[tests-image]: https://img.shields.io/badge/test-passing-green.svg