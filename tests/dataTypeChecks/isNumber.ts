//  Dependancies
import { isNumber } from '../checks';
import { validate } from './checkDataType';


//  Number data type values
export function isValidNumberValue(): void {
    describe('Number data type', () => {
        validate('Number', isNumber, -250);
        validate('Number', isNumber, -.75);
        validate('Number', isNumber, -0.5);
        validate('Number', isNumber, 0);
        validate('Number', isNumber, .85);
        validate('Number', isNumber, 100);
    });
}
