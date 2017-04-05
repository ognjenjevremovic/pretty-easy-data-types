//  Dependancies
import { default as performDataTypeCheckAgainstValue } from './dataTypeChecks';
import { default as getDataTypeOfProvidedValues } from './getDataTypes';


/**
 * @description
 *  Perform the batch test, testing getDataType method
 *
 * @returns {*}
*/
describe('Get the data type of the parameters provided', getDataTypeOfProvidedValues);

/**
 * @description
 *  Perform the batch test, testing is* methods
 *
 * @returns {*}
*/
describe('Check if it the parameter is of data type expected', performDataTypeCheckAgainstValue);
