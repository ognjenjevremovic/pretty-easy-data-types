"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancy
var __1 = require("..");
/**
 * @description
 *  Checks if the provided value is an instance of a Date class
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
exports.default = function (valueSupplied) { return __1.getType(valueSupplied) === 'date'; };
//# sourceMappingURL=isDate.js.map