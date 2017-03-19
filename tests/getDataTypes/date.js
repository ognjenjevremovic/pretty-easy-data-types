"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var getDataType_1 = require("./getDataType");
//  Date data type values
function dateDataType() {
    describe('Instance of Date class', function () {
        getDataType_1.getDataType('Date', 'date', new Date());
    });
}
exports.dateDataType = dateDataType;
//# sourceMappingURL=date.js.map