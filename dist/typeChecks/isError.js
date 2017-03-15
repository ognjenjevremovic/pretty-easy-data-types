"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancy
var getType_1 = require("../getType");
/**
 * @description
 *  Checks if the provided value is
 *  an instance of Error class
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
exports.isError = function (value) { return getType_1.getType(value) === 'error'; };
//# sourceMappingURL=isError.js.map