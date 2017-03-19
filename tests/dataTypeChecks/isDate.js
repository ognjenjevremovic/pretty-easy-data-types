"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var checks_1 = require("../checks");
var checkDataType_1 = require("./checkDataType");
//  Date data type values
function isValidDateObjectValue() {
    describe('Date data type', function () {
        checkDataType_1.validate('Instance of Date class', checks_1.isDate, new Date());
    });
}
exports.isValidDateObjectValue = isValidDateObjectValue;
//# sourceMappingURL=isDate.js.map