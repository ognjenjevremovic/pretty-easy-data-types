"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var __1 = require("../..");
var validate_1 = require("./validate");
/**
 * @description
 *  Boolean parameters for which assertion is performed
 *
 * @returns {boolean[]}
 */
function getAssertionArguments() {
    return [
        true,
        false
    ];
}
/**
 * @description
 *  Boolean parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
function default_1() {
    describe('Boolean value/data type', function () {
        var info = 'from boolean';
        for (var _i = 0, _a = getAssertionArguments(); _i < _a.length; _i++) {
            var parameter = _a[_i];
            validate_1.default(info, __1.isBoolean, parameter);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=boolean.js.map