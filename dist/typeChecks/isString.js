"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancy
var getType_1 = require("../getType");
/**
 * @description
 *  Checks if the provided value is string
 *  or an instance of String constructor
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
exports.isString = function (value) { return getType_1.getType(value) === 'string'; };
//# sourceMappingURL=isString.js.map