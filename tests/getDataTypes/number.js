"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var getDataType_1 = require("./getDataType");
//  Number data type values
function numberDataType() {
    describe('Number', function () {
        getDataType_1.getDataType('Number', 'number', -250);
        getDataType_1.getDataType('Number', 'number', -.75);
        getDataType_1.getDataType('Number', 'number', -0.5);
        getDataType_1.getDataType('Number', 'number', 0);
        getDataType_1.getDataType('Number', 'number', .85);
        getDataType_1.getDataType('Number', 'number', 100);
    });
}
exports.numberDataType = numberDataType;
//# sourceMappingURL=number.js.map