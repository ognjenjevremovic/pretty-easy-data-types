//  Dependancies
import { isArray } from '../checks';
import { validate } from './checkDataType';


//  Array data type values
export function isValidArray(): void {
    describe('Array data type', () => {
        validate('Array', isArray, []);
        validate('Array', isArray, [ null, false, undefined ]);
        validate('Array', isArray, [ '', 0 ]);
        validate('Array', isArray, [ {}, [] ]);
        validate('Array', isArray, [ 'f00', 20, { bar : 'baz' }]);
    });
}
