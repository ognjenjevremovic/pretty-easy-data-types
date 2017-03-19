//  Dependancies
import { getDataType } from './getDataType';


//  Array data type values
export function arrayDataType(): void {
    describe('Array', () => {
        getDataType('Array', 'array', []);
        getDataType('Array', 'array', [ null, false, undefined ]);
        getDataType('Array', 'array', [ '', 0 ]);
        getDataType('Array', 'array', [ {}, [] ]);
        getDataType('Array', 'array', [ 'f00', 20, { bar: 'baz' }]);
    });
}
