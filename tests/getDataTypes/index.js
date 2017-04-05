"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Tests
var array_1 = require("./array");
var boolean_1 = require("./boolean");
var dateObject_1 = require("./dateObject");
var errorObject_1 = require("./errorObject");
var function_1 = require("./function");
var null_1 = require("./null");
var number_1 = require("./number");
var object_1 = require("./object");
var string_1 = require("./string");
var undefined_1 = require("./undefined");
/**
 * @description
 *  Batch test for getting the parameter's value data type.
 *  Tests should pass!
 *
 * @export
 */
function default_1() {
    describe('Value passed is of', function () {
        array_1.default();
        boolean_1.default();
        dateObject_1.default();
        errorObject_1.default();
        function_1.default();
        null_1.default();
        number_1.default();
        object_1.default();
        string_1.default();
        undefined_1.default();
    });
}
exports.default = default_1;
//# sourceMappingURL=index.js.map