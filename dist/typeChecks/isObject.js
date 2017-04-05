"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancy
var __1 = require("..");
/**
 * @description
 *  Checks if the provided value is an instance of an Object class
 *
 *  (Instances of classes that derive from an Object class, such as Array, Error, Date
 *  are of different data type - meaning, they're not instances of Object and
 *  thus this check will return boolean false for those data types)
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
exports.default = function (valueSupplied) { return __1.getType(valueSupplied) === 'object'; };
//# sourceMappingURL=isObject.js.map