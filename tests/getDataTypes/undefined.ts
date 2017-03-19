//  Dependancies
import { getDataType } from './getDataType';


//  Undefined data type values
export function undefinedDataType(): void {
    describe('undefined', () => {
        getDataType('undefined', 'undefined');
        getDataType('undefined', 'undefined', undefined);
    });
}
