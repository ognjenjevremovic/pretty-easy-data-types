"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var assert = require("assert");
/**
 * @description
 *  Get the data type of the value passed,
 *  supply it to the comparator
 *  and perform the check
 *
 * @export
 * @param {string} comparator
 * @param {(value: any) => boolean} check
 * @param {*} [value]
 */
function validate(comparator, check, value) {
    it("Assumed data type matches a comparator -> " + comparator, function () { return assert.equal(check(value), true); });
}
exports.validate = validate;
//# sourceMappingURL=checkDataType.js.map