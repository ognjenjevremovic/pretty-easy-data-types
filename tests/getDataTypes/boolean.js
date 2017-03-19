"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var getDataType_1 = require("./getDataType");
//  Boolean data type values
function booleanDataType() {
    describe('Boolean', function () {
        getDataType_1.getDataType('Boolean', 'boolean', true);
        getDataType_1.getDataType('Boolean', 'boolean', false);
    });
}
exports.booleanDataType = booleanDataType;
//# sourceMappingURL=boolean.js.map