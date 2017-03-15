"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancy
var getType_1 = require("../getType");
/**
 * @description
 *  Checks if the provided value is
 *  an instance of Date class
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
exports.isDate = function (value) { return getType_1.getType(value) === 'date'; };
//# sourceMappingURL=isDate.js.map