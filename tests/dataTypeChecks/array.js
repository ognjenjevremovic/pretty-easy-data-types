"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var __1 = require("../..");
var validate_1 = require("./validate");
/**
 * @description
 *  Array parameters for which assertion is performed
 *
 * @returns {any[]}
 */
function getAssertionArguments() {
    return [
        [],
        [''],
        [['nested', ['like never before']]],
        [0, false, null, undefined],
        [{ name: 'Ognjen' }],
        [new Error('custom'), new Error('error'), new Error('list')],
        [555, true, 'string']
    ];
}
/**
 * @description
 *  Array parameter value/data type tests.
 *
 * @export
 */
function default_1() {
    describe('Array data type', function () {
        var dataTypeOfArgumentSupplied = 'Array';
        for (var _i = 0, _a = getAssertionArguments(); _i < _a.length; _i++) {
            var argumentSuppliedToMethod = _a[_i];
            validate_1.default(dataTypeOfArgumentSupplied, __1.isArray, argumentSuppliedToMethod);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=array.js.map