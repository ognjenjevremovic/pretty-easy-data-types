//  Dependancies
import { getDataType } from './getDataType';


//  Boolean data type values
export function booleanDataType(): void {
     describe('Boolean', () => {
        getDataType('Boolean', 'boolean', true);
        getDataType('Boolean', 'boolean', false);
    });
}
