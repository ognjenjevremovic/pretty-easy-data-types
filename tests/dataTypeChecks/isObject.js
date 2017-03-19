"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var checks_1 = require("../checks");
var checkDataType_1 = require("./checkDataType");
//  Object data type values
function isValidObject() {
    describe('Object data type', function () {
        checkDataType_1.validate('Object', checks_1.isObject, {});
        checkDataType_1.validate('Object', checks_1.isObject, { value: 0 });
        checkDataType_1.validate('Object', checks_1.isObject, { value: '' });
        checkDataType_1.validate('Object', checks_1.isObject, { value: false });
        checkDataType_1.validate('Object', checks_1.isObject, { value: undefined });
        checkDataType_1.validate('Object', checks_1.isObject, { foo: 'bar', baz: 'f00' });
    });
}
exports.isValidObject = isValidObject;
//# sourceMappingURL=isObject.js.map