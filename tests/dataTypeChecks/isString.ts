//  Dependancies
import { isString } from '../checks';
import { validate } from './checkDataType';


//  String data type values
export function isValidStringValue(): void {
    describe('String data type', () => {
        validate('String', isString, '');
        validate('String', isString, '    ');
        validate('String', isString, '0');
        validate('String', isString, 'null');
        validate('String', isString, 'undefined');
        validate('String', isString, 'false');
        validate('String', isString, '[]');
        validate('String', isString, '{ foo: "bar" }');
    });
}
