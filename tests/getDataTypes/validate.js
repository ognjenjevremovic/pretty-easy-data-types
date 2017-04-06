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
 * @param {string} valueReturnedShouldBe
 * @param {string} dataTypeOfValueShouldBe
 * @param {*} [getDataTypeFromThisValue]
 */
function default_1(valueReturnedShouldBe, dataTypeOfValueShouldBe, getDataTypeFromValue) {
    it(moduleShouldReturn + " " + dataTypeOfValueShouldBe + " from -> " + valueReturnedShouldBe + " data type value", function () { return assert.equal(__1.getType(getDataTypeFromValue), dataTypeOfValueShouldBe); });
}
exports.default = default_1;
//# sourceMappingURL=validate.js.map