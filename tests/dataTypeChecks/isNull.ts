//  Dependancies
import { isNull } from '../checks';
import { validate } from './checkDataType';


//  null data type values
export function isValidNullValue(): void {
    describe('null data type', () => {
        validate('null', isNull, null);
    });
}
