//  Dependancies
import { isUndefined } from '../checks';
import { validate } from './checkDataType';


//  undefined data type values
export function isValidUndefinedValue(): void {
    describe('undefined data type', () => {
        validate('undefined', isUndefined);
        validate('undefined', isUndefined, undefined);
    });
}
