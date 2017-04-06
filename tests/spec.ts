//  Dependancies
import { default as performDataTypeCheckOnProvidedParameter } from './dataTypeChecks';
import { default as getDataTypeOfProvidedParameter } from './getDataTypes';


/**
 * @description
 *  Perform the batch test, testing getDataType method
 *
 * @returns {*}
*/
describe('Get the data type of the parameters provided', getDataTypeOfProvidedParameter);

/**
 * @description
 *  Perform the batch test, testing is* methods
 *
 * @returns {*}
*/
describe('Check if it the parameter is of data type expected', performDataTypeCheckOnProvidedParameter);
