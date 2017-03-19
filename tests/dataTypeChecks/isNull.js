"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var checks_1 = require("../checks");
var checkDataType_1 = require("./checkDataType");
//  null data type values
function isValidNullValue() {
    describe('null data type', function () {
        checkDataType_1.validate('null', checks_1.isNull, null);
    });
}
exports.isValidNullValue = isValidNullValue;
//# sourceMappingURL=isNull.js.map