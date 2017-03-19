"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var checks_1 = require("../checks");
var checkDataType_1 = require("./checkDataType");
//  Error data type values
function isValidErrorObjectValue() {
    describe('Error data type', function () {
        checkDataType_1.validate('Instance of Error class', checks_1.isError, new Error());
        checkDataType_1.validate('Instance of Error class', checks_1.isError, new Error('Error!'));
    });
}
exports.isValidErrorObjectValue = isValidErrorObjectValue;
//# sourceMappingURL=isError.js.map