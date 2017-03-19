"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var checks_1 = require("../checks");
var checkDataType_1 = require("./checkDataType");
//  undefined data type values
function isValidUndefinedValue() {
    describe('undefined data type', function () {
        checkDataType_1.validate('undefined', checks_1.isUndefined);
        checkDataType_1.validate('undefined', checks_1.isUndefined, undefined);
    });
}
exports.isValidUndefinedValue = isValidUndefinedValue;
//# sourceMappingURL=isUndefined.js.map