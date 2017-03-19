"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var checks_1 = require("../checks");
var checkDataType_1 = require("./checkDataType");
//  Array data type values
function isValidArray() {
    describe('Array data type', function () {
        checkDataType_1.validate('Array', checks_1.isArray, []);
        checkDataType_1.validate('Array', checks_1.isArray, [null, false, undefined]);
        checkDataType_1.validate('Array', checks_1.isArray, ['', 0]);
        checkDataType_1.validate('Array', checks_1.isArray, [{}, []]);
        checkDataType_1.validate('Array', checks_1.isArray, ['f00', 20, { bar: 'baz' }]);
    });
}
exports.isValidArray = isValidArray;
//# sourceMappingURL=isArray.js.map