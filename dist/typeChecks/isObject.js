"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancy
var getType_1 = require("../getType");
/**
 * @description
 *  Checks if the provided value is object literal
 *  or an instance of Object and not an instance of
 *  a class derived from Object class (Array, Error, Date)
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
exports.isObject = function (value) { return getType_1.getType(value) === 'object'; };
//# sourceMappingURL=isObject.js.map