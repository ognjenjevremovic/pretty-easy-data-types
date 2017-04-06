"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description
 *  Get the string representation of value's data type
 *
 * @returns {() => string}
 */
var getStringRepresentationOfDataType = Object.prototype.toString;
/**
 * @description
 *  Returns a string representing the data type
 *  of the argument supplied, in all lowercase letters
 *
 * @export
 * @param {*} value
 * @returns {string}
 */
exports.default = function (valueSuppliedToTheMethod) { return getStringRepresentationOfDataType
    .call(valueSuppliedToTheMethod)
    .split(' ')[1]
    .replace(/\W/g, '')
    .toLocaleLowerCase(); };
//# sourceMappingURL=getType.js.map