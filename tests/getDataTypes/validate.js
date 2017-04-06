"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var assert = require("assert");
var __1 = require("../..");
//  What should the module return
var moduleShouldReturn = 'Should return';
/**
 * @description
 *  Compare the value returned by the method, with the value expected.
 *  This is the test validator for all valid parameter values.
 *
 * @export
 * @param {string} dataTypeOfArgumentSupplied
 * @param {string} dataTypeOfValueShouldBe
 * @param {*} [getDataTypeFromValue]
 */
function default_1(dataTypeOfArgumentSupplied, dataTypeOfValueShouldBe, getDataTypeFromValue) {
    it(moduleShouldReturn + " " + dataTypeOfValueShouldBe + " from -> " + dataTypeOfArgumentSupplied + " data type value", function () { return assert.equal(__1.getType(getDataTypeFromValue), dataTypeOfValueShouldBe); });
}
exports.default = default_1;
//# sourceMappingURL=validate.js.map