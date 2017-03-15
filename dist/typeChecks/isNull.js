"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancy
var getType_1 = require("../getType");
/**
 * @description
 *  Checks if the provided value is null
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
exports.isNull = function (value) { return getType_1.getType(value) === 'null'; };
//# sourceMappingURL=isNull.js.map