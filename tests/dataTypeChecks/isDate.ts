//  Dependancies
import { isDate } from '../checks';
import { validate } from './checkDataType';


//  Date data type values
export function isValidDateObjectValue(): void {
    describe('Date data type', () => {
        validate('Instance of Date class', isDate, new Date());
    });
}
