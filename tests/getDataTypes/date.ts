//  Dependancies
import { getDataType } from './getDataType';


//  Date data type values
export function dateDataType(): void {
    describe('Instance of Date class', () => {
        getDataType('Date', 'date', new Date());
    });
}
