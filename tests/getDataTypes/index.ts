//  Dependancies
import { arrayDataType } from './array';
import { booleanDataType } from './boolean';
import { dateDataType } from './date';
import { errorDataType } from './error';
import { nullDataType } from './null';
import { numberDataType } from './number';
import { objectDataType } from './object';
import { stringDataType } from './string';
import { undefinedDataType } from './undefined';


//  Checks
export function getDataTypes(): void {
    describe('Supported data types', () => {
        arrayDataType();
        booleanDataType();
        dateDataType();
        errorDataType();
        nullDataType();
        numberDataType();
        objectDataType();
        stringDataType();
        undefinedDataType();
    });
}
