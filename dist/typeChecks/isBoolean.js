"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancy
var getType_1 = require("../getType");
/**
 * @description
 *  Checks if the provided value is boolean
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
exports.isBoolean = function (value) { return getType_1.getType(value) === 'boolean'; };
//# sourceMappingURL=isBoolean.js.map