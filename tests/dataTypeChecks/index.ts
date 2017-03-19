//  Dependancies
import { isValidArray } from './isArray';
import { isValidBooleanValue } from './isBoolean';
import { isValidDateObjectValue } from './isDate';
import { isValidErrorObjectValue } from './isError';
import { isValidNullValue } from './isNull';
import { isValidNumberValue } from './isNumber';
import { isValidObject } from './isObject';
import { isValidStringValue } from './isString';
import { isValidUndefinedValue } from './isUndefined';


//  Checks
export function checkDataTypes(): void {
    describe('Value passed is of', () => {
        isValidArray();
        isValidBooleanValue();
        isValidDateObjectValue();
        isValidErrorObjectValue();
        isValidNullValue();
        isValidNumberValue();
        isValidObject();
        isValidStringValue();
        isValidUndefinedValue();
    });
}
