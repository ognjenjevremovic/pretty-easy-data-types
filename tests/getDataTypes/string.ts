//  Dependancies
import { getDataType } from './getDataType';


//  String data type values
export function stringDataType(): void {
    describe('String', () => {
        getDataType('String', 'string', '');
        getDataType('String', 'string', '    ');
        getDataType('String', 'string', '0');
        getDataType('String', 'string', 'null');
        getDataType('String', 'string', 'undefined');
        getDataType('String', 'string', 'false');
        getDataType('String', 'string', '[]');
        getDataType('String', 'string', '{ foo: "bar" }');
    });
}
