"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var getDataType_1 = require("./getDataType");
//  Error data type values
function errorDataType() {
    describe('Instance of Error class', function () {
        getDataType_1.getDataType('Error', 'error', new Error());
        getDataType_1.getDataType('Error', 'error', new Error('Error!'));
    });
}
exports.errorDataType = errorDataType;
//# sourceMappingURL=error.js.map