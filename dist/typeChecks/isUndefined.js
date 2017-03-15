"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancy
var getType_1 = require("../getType");
/**
 * @description
 *  Checks if the provided value is undefined
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
exports.isUndefined = function (value) { return getType_1.getType(value) === 'undefined'; };
//# sourceMappingURL=isUndefined.js.map