"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var assert = require("assert");
var checks_1 = require("../checks");
/**
 * @description
 *  Gets the data type of the value passed
 *  and performs the check
 *
 * @export
 * @param {string} dataType
 * @param {*} equalityCheck
 * @param {*} [value]
 */
function getDataType(dataType, equalityCheck, value) {
    it("Data passed is of " + dataType + " data type", function () { return assert.equal(checks_1.getType(value), equalityCheck); });
}
exports.getDataType = getDataType;
//# sourceMappingURL=getDataType.js.map