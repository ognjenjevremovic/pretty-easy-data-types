"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
/**
 * @description
 *  Instances of Date class parameters for which assertion is performed
 *
 * @returns {Date[]}
 */
function getAssertionArguments() {
    return [
        new Date(),
        new Date('04/04/2017'),
        new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
        new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
    ];
}
/**
 * @description
 *  Instance of Date class parameter value/data type tests.
 *
 * @export
 */
function default_1() {
    describe('Date data type value', function () {
        var dataTypeOfArgumentSupplied = 'instance of Date class';
        for (var _i = 0, _a = getAssertionArguments(); _i < _a.length; _i++) {
            var argumentSuppliedToMethod = _a[_i];
            validate_1.default(dataTypeOfArgumentSupplied, 'date', argumentSuppliedToMethod);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=dateObject.js.map