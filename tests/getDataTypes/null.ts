//  Dependancies
import { getDataType } from './getDataType';


//  null data type values
export function nullDataType(): void {
    describe('Null', () => {
        getDataType('null', 'null', null);
    });
}
