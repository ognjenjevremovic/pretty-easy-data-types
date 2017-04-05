"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var __1 = require("../..");
var validate_1 = require("./validate");
/**
 * @description
 *  Function parameters for which assertion is performed
 *
 * @returns {Function[]}
 */
function getAssertionArguments() {
    return [
        function () { },
        function () { return new Error('It should not be thrown, thus not stopping the Node process'); },
        function () { return 5000; },
        function (param) { return console.log(param); }
    ];
}
/**
 * @description
 *  Function parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
function default_1() {
    describe('Function value', function () {
        var info = 'from function';
        for (var _i = 0, _a = getAssertionArguments(); _i < _a.length; _i++) {
            var parameter = _a[_i];
            validate_1.default(info, __1.isFunction, parameter);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=function.js.map