//  Dependancies
import { isBoolean } from '../checks';
import { validate } from './checkDataType';


//  Boolean data type values
export function isValidBooleanValue(): void {
    describe('Boolean data type', () => {
        validate('Boolean', isBoolean, true);
        validate('Boolean', isBoolean, false);
    });
}
