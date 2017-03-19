"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var getDataType_1 = require("./getDataType");
//  Array data type values
function arrayDataType() {
    describe('Array', function () {
        getDataType_1.getDataType('Array', 'array', []);
        getDataType_1.getDataType('Array', 'array', [null, false, undefined]);
        getDataType_1.getDataType('Array', 'array', ['', 0]);
        getDataType_1.getDataType('Array', 'array', [{}, []]);
        getDataType_1.getDataType('Array', 'array', ['f00', 20, { bar: 'baz' }]);
    });
}
exports.arrayDataType = arrayDataType;
//# sourceMappingURL=array.js.map