"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var array_1 = require("./array");
var boolean_1 = require("./boolean");
var date_1 = require("./date");
var error_1 = require("./error");
var null_1 = require("./null");
var number_1 = require("./number");
var object_1 = require("./object");
var string_1 = require("./string");
var undefined_1 = require("./undefined");
//  Checks
function getDataTypes() {
    describe('Supported data types', function () {
        array_1.arrayDataType();
        boolean_1.booleanDataType();
        date_1.dateDataType();
        error_1.errorDataType();
        null_1.nullDataType();
        number_1.numberDataType();
        object_1.objectDataType();
        string_1.stringDataType();
        undefined_1.undefinedDataType();
    });
}
exports.getDataTypes = getDataTypes;
//# sourceMappingURL=index.js.map