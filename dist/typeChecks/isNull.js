"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancy
var __1 = require("..");
/**
 * @description
 *  Checks if provided argument is of a null data type
 *
 * @export
 * @param {*} argumentSuppliedToMethod
 * @returns {boolean}
 */
exports.default = function (argumentSuppliedToMethod) { return __1.getType(argumentSuppliedToMethod) === 'null'; };
//# sourceMappingURL=isNull.js.map