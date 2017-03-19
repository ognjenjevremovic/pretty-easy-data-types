//  Dependancies
import { getDataType } from './getDataType';


//  Error data type values
export function errorDataType(): void {
    describe('Instance of Error class', () => {
        getDataType('Error', 'error', new Error());
        getDataType('Error', 'error', new Error('Error!'));
    });
}
