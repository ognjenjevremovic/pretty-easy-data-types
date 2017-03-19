//  Dependancies
import { isObject } from '../checks';
import { validate } from './checkDataType';


//  Object data type values
export function isValidObject(): void {
    describe('Object data type', () => {
        validate('Object', isObject, {});
        validate('Object', isObject, { value: 0 });
        validate('Object', isObject, { value: '' });
        validate('Object', isObject, { value: false });
        validate('Object', isObject, { value: undefined });
        validate('Object', isObject, { foo: 'bar', baz: 'f00' });
    });
}
