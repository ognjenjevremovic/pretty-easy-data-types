"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
/**
 * @description
 *  Undefined parameter value/data type tests.
 *
 * @export
 * @returns {*}
 */
function default_1() {
    describe('Undefined data type value', function () {
        var dataTypeOfArgumentSupplied = 'undefined';
        validate_1.default(dataTypeOfArgumentSupplied, 'undefined');
        validate_1.default(dataTypeOfArgumentSupplied, 'undefined', undefined);
    });
}
exports.default = default_1;
//# sourceMappingURL=undefined.js.map