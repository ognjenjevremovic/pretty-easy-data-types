//  Dependancies
import { isError } from '../checks';
import { validate } from './checkDataType';


//  Error data type values
export function isValidErrorObjectValue(): void {
    describe('Error data type', () => {
        validate('Instance of Error class', isError, new Error());
        validate('Instance of Error class', isError, new Error('Error!'));
    });
}
