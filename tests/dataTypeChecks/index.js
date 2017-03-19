"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var isArray_1 = require("./isArray");
var isBoolean_1 = require("./isBoolean");
var isDate_1 = require("./isDate");
var isError_1 = require("./isError");
var isNull_1 = require("./isNull");
var isNumber_1 = require("./isNumber");
var isObject_1 = require("./isObject");
var isString_1 = require("./isString");
var isUndefined_1 = require("./isUndefined");
//  Checks
function checkDataTypes() {
    describe('Value passed is of', function () {
        isArray_1.isValidArray();
        isBoolean_1.isValidBooleanValue();
        isDate_1.isValidDateObjectValue();
        isError_1.isValidErrorObjectValue();
        isNull_1.isValidNullValue();
        isNumber_1.isValidNumberValue();
        isObject_1.isValidObject();
        isString_1.isValidStringValue();
        isUndefined_1.isValidUndefinedValue();
    });
}
exports.checkDataTypes = checkDataTypes;
//# sourceMappingURL=index.js.map