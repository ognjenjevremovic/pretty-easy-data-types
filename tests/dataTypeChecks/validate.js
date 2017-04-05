"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var assert = require("assert");
//  What should the module return
var moduleShouldReturn = 'Should return boolean true ->';
/**
 * @description
 *  Check if the method returns a boolean value of true.
 *  This is the test validator for all valid parameter values.
 *
 * @export
 * @param {string} valueReturnedShouldBe
 * @param {(value : any) => boolean} isOfCertainDataTypeMethod
 * @param {*} [getDataTypeFromThisValue]
 */
function default_1(valueReturnedShouldBe, isOfCertainDataTypeMethod, getDataTypeFromThisValue) {
    it(moduleShouldReturn + " " + valueReturnedShouldBe + " value/data type", function () { return assert.equal(isOfCertainDataTypeMethod(getDataTypeFromThisValue), true); });
}
exports.default = default_1;
//# sourceMappingURL=validate.js.map