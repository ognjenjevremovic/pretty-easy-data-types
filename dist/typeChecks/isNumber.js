"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancy
var getType_1 = require("../getType");
/**
 * @description
 *  Checks if the provided value is number
 *  or an instance of Number
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
exports.isNumber = function (value) { return getType_1.getType(value) === 'number'; };
//# sourceMappingURL=isNumber.js.map