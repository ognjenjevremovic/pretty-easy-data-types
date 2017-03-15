"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancy
var getType_1 = require("../getType");
/**
 * @description
 *  Checks if the provided value is an array of values
 *  or an instance of Array
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
exports.isArray = function (value) { return getType_1.getType(value) === 'array'; };
//# sourceMappingURL=isArray.js.map