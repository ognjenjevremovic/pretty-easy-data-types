"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var __1 = require("../..");
var validate_1 = require("./validate");
/**
 * @description
 *  Number parameters for which assertion is performed
 *
 * @returns {Number[]}
 */
function getAssertionArguments() {
    return [
        -600,
        -5.6975,
        -.5000,
        -0.0001,
        0.0525,
        .99999,
        568
    ];
}
/**
 * @description
 *  Number parameter value/data type tests.
 *
 * @export
 */
function default_1() {
    describe('Number data type value', function () {
        var dataTypeOfArgumentSupplied = 'number';
        for (var _i = 0, _a = getAssertionArguments(); _i < _a.length; _i++) {
            var argumentSuppliedToMethod = _a[_i];
            validate_1.default(dataTypeOfArgumentSupplied, __1.isNumber, argumentSuppliedToMethod);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=number.js.map