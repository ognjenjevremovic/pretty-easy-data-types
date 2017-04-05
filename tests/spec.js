"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var dataTypeChecks_1 = require("./dataTypeChecks");
var getDataTypes_1 = require("./getDataTypes");
/**
 * @description
 *  Perform the batch test, testing getDataType method
 *
 * @returns {*}
*/
describe('Get the data type of the parameters provided', getDataTypes_1.default);
/**
 * @description
 *  Perform the batch test, testing is* methods
 *
 * @returns {*}
*/
describe('Check if it the parameter is of data type expected', dataTypeChecks_1.default);
//# sourceMappingURL=spec.js.map