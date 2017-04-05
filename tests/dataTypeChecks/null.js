"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var __1 = require("../..");
var validate_1 = require("./validate");
/**
 * @description
 *  Null value parameter value/data type test.
 *
 * @export
 * @returns {*}
 */
function default_1() {
    describe('Null value/data type', function () {
        var info = 'from null';
        validate_1.default(info, __1.isNull, null);
    });
}
exports.default = default_1;
//# sourceMappingURL=null.js.map