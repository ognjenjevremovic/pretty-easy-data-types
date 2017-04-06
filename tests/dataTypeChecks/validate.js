"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var assert = require("assert");
//  What should the module return
var moduleShouldReturn = 'Should return boolean true from ->';
/**
 * @description
 *  Check if the method returns a boolean value of true.
 *  This is the test validator for all valid parameter values.
 *
 * @export
 * @param {string} dataTypeOfArgumentSupplied
 * @param {(argumentSuppliedToMethod : any) => boolean} isOfCertainDataTypeMethod
 * @param {*} [getDataTypeFromValue]
 */
function default_1(dataTypeOfArgumentSupplied, isOfCertainDataTypeMethod, getDataTypeFromValue) {
    it("\n        " + moduleShouldReturn + " " + dataTypeOfArgumentSupplied + " data type value", function () { return assert.equal(isOfCertainDataTypeMethod(getDataTypeFromValue), true); });
}
exports.default = default_1;
//# sourceMappingURL=validate.js.map