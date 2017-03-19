//  Dependancies
import { getDataType } from './getDataType';


//  Number data type values
export function numberDataType(): void {
    describe('Number', () => {
        getDataType('Number', 'number', -250);
        getDataType('Number', 'number', -.75);
        getDataType('Number', 'number', -0.5);
        getDataType('Number', 'number', 0);
        getDataType('Number', 'number', .85);
        getDataType('Number', 'number', 100);
    });
}
