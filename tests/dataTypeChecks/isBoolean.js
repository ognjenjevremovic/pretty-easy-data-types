"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var checks_1 = require("../checks");
var checkDataType_1 = require("./checkDataType");
//  Boolean data type values
function isValidBooleanValue() {
    describe('Boolean data type', function () {
        checkDataType_1.validate('Boolean', checks_1.isBoolean, true);
        checkDataType_1.validate('Boolean', checks_1.isBoolean, false);
    });
}
exports.isValidBooleanValue = isValidBooleanValue;
//# sourceMappingURL=isBoolean.js.map