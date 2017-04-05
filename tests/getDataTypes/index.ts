//  Tests
import { default as arrayParameter } from './array';
import { default as booleanParameter } from './boolean';
import { default as dateObjectParameter } from './dateObject';
import { default as errorObjectParameter } from './errorObject';
import { default as functionParameter } from './function';
import { default as nullParameter } from './null';
import { default as numberParameter } from './number';
import { default as objectParameter } from './object';
import { default as stringParameter } from './string';
import { default as undefinedParameter } from './undefined';


/**
 * @description
 *  Batch test for getting the parameter's value data type.
 *  Tests should pass!
 *
 * @export
 */
export default function() : void {
    describe('Value passed is of', () => {
        arrayParameter();
        booleanParameter();
        dateObjectParameter();
        errorObjectParameter();
        functionParameter();
        nullParameter();
        numberParameter();
        objectParameter();
        stringParameter();
        undefinedParameter();
    });
}
