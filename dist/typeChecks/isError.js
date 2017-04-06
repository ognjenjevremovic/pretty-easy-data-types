"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancy
var __1 = require("..");
/**
 * @description
 *  Checks if provided argument is an instance of a Error class
 *
 * @export
 * @param {*} argumentSuppliedToMethod
 * @returns {boolean}
 */
exports.default = function (argumentSuppliedToMethod) { return __1.getType(argumentSuppliedToMethod) === 'error'; };
//# sourceMappingURL=isError.js.map