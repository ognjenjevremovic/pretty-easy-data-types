"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var checks_1 = require("../checks");
var checkDataType_1 = require("./checkDataType");
//  Number data type values
function isValidNumberValue() {
    describe('Number data type', function () {
        checkDataType_1.validate('Number', checks_1.isNumber, -250);
        checkDataType_1.validate('Number', checks_1.isNumber, -.75);
        checkDataType_1.validate('Number', checks_1.isNumber, -0.5);
        checkDataType_1.validate('Number', checks_1.isNumber, 0);
        checkDataType_1.validate('Number', checks_1.isNumber, .85);
        checkDataType_1.validate('Number', checks_1.isNumber, 100);
    });
}
exports.isValidNumberValue = isValidNumberValue;
//# sourceMappingURL=isNumber.js.map