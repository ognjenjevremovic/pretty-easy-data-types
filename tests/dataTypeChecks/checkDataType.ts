//  Dependancies
import * as assert from 'assert';


/**
 * @description
 *  Get the data type of the value passed,
 *  supply it to the comparator
 *  and perform the check
 *
 * @export
 * @param {string} comparator
 * @param {(value: any) => boolean} check
 * @param {*} [value]
 */
export function validate(
    comparator  : string,
    check       : (value: any) => boolean,
    value?      : any
): void {
    it(`Assumed data type matches a comparator -> ${comparator}`, () => assert.equal(check(value), true));
}