"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var __1 = require("../..");
var validate_1 = require("./validate");
/**
 * @description
 *  Instances of Error class parameters for which assertion is performed
 *
 * @returns {Error[]}
 */
function getAssertionArguments() {
    return [
        new Error(),
        new Error('Custom error'),
        new Error('Invalid parameter supplied'),
        new Error('It should not be thrown, thus not stopping the Node process')
    ];
}
/**
 * @description
 *  Instance of Error class parameter value/data type tests.
 *
 * @export
 */
function default_1() {
    describe('Error value/data type', function () {
        var dataTypeOfArgumentSupplied = 'instance of Error class';
        for (var _i = 0, _a = getAssertionArguments(); _i < _a.length; _i++) {
            var argumentSuppliedToMethod = _a[_i];
            validate_1.default(dataTypeOfArgumentSupplied, __1.isError, argumentSuppliedToMethod);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=errorObject.js.map