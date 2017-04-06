"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var __1 = require("../..");
var validate_1 = require("./validate");
/**
 * @description
 *  Object parameters for which assertion is performed
 *
 * @returns {Object[]}
 */
function getAssertionArguments() {
    return [
        {},
        { name: 'Ognjen', age: 23 },
        { some: 'value', falsey: false },
        { num: 0 },
        { exists: 0, defined: undefined, val: null },
        { date: new Date(), year: new Date().getFullYear().toString() }
    ];
}
/**
 * @description
 *  Object parameter value/data type tests.
 *
 * @export
 */
function default_1() {
    describe('Object value', function () {
        var dataTypeOfArgumentSupplied = 'Object';
        for (var _i = 0, _a = getAssertionArguments(); _i < _a.length; _i++) {
            var argumentSuppliedToMethod = _a[_i];
            validate_1.default(dataTypeOfArgumentSupplied, __1.isObject, argumentSuppliedToMethod);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=object.js.map