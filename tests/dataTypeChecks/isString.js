"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var checks_1 = require("../checks");
var checkDataType_1 = require("./checkDataType");
//  String data type values
function isValidStringValue() {
    describe('String data type', function () {
        checkDataType_1.validate('String', checks_1.isString, '');
        checkDataType_1.validate('String', checks_1.isString, '    ');
        checkDataType_1.validate('String', checks_1.isString, '0');
        checkDataType_1.validate('String', checks_1.isString, 'null');
        checkDataType_1.validate('String', checks_1.isString, 'undefined');
        checkDataType_1.validate('String', checks_1.isString, 'false');
        checkDataType_1.validate('String', checks_1.isString, '[]');
        checkDataType_1.validate('String', checks_1.isString, '{ foo: "bar" }');
    });
}
exports.isValidStringValue = isValidStringValue;
//# sourceMappingURL=isString.js.map