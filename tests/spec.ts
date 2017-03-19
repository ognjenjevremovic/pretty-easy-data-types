//  Dependancies
import { getDataTypes } from './getDataTypes';
import { checkDataTypes } from './dataTypeChecks';


//  Test group
//  get data type of the values passed
describe('Get the data type of the values', getDataTypes);

//  Test group
//  compare the data type passed
//  with the expected value
describe('Check if it the value is of data type assumed', checkDataTypes );
