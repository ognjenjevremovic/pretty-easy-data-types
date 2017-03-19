"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var getDataType_1 = require("./getDataType");
//  String data type values
function stringDataType() {
    describe('String', function () {
        getDataType_1.getDataType('String', 'string', '');
        getDataType_1.getDataType('String', 'string', '    ');
        getDataType_1.getDataType('String', 'string', '0');
        getDataType_1.getDataType('String', 'string', 'null');
        getDataType_1.getDataType('String', 'string', 'undefined');
        getDataType_1.getDataType('String', 'string', 'false');
        getDataType_1.getDataType('String', 'string', '[]');
        getDataType_1.getDataType('String', 'string', '{ foo: "bar" }');
    });
}
exports.stringDataType = stringDataType;
//# sourceMappingURL=string.js.map