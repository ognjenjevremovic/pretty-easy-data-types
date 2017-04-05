"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancy
var __1 = require("..");
/**
 * @description
 *  Checks if the provided value is of a boolean data type
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
exports.default = function (valueSupplied) { return __1.getType(valueSupplied) === 'boolean'; };
//# sourceMappingURL=isBoolean.js.map