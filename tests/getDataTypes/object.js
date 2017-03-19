"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var getDataType_1 = require("./getDataType");
//  Object data type values
function objectDataType() {
    describe('Object', function () {
        getDataType_1.getDataType('Object', 'object', {});
        getDataType_1.getDataType('Object', 'object', { value: 0 });
        getDataType_1.getDataType('Object', 'object', { value: '' });
        getDataType_1.getDataType('Object', 'object', { value: false });
        getDataType_1.getDataType('Object', 'object', { value: undefined });
        getDataType_1.getDataType('Object', 'object', { foo: 'bar', baz: 'f00' });
    });
}
exports.objectDataType = objectDataType;
//# sourceMappingURL=object.js.map