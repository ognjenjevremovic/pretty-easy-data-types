"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var getDataType_1 = require("./getDataType");
//  Undefined data type values
function undefinedDataType() {
    describe('undefined', function () {
        getDataType_1.getDataType('undefined', 'undefined');
        getDataType_1.getDataType('undefined', 'undefined', undefined);
    });
}
exports.undefinedDataType = undefinedDataType;
//# sourceMappingURL=undefined.js.map