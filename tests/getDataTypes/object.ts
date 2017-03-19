//  Dependancies
import { getDataType } from './getDataType';


//  Object data type values
export function objectDataType(): void {
    describe('Object', () => {
        getDataType('Object', 'object', {});
        getDataType('Object', 'object', { value: 0 });
        getDataType('Object', 'object', { value: '' });
        getDataType('Object', 'object', { value: false });
        getDataType('Object', 'object', { value: undefined });
        getDataType('Object', 'object', { foo: 'bar', baz: 'f00' });
    });
}
