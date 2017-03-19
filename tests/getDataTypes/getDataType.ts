//  Dependancies
import * as assert from 'assert';
import { getType } from '../checks';


/**
 * @description
 *  Gets the data type of the value passed
 *  and performs the check
 *
 * @export
 * @param {string} dataType
 * @param {*} equalityCheck
 * @param {*} [value]
 */
export function getDataType(dataType: string, equalityCheck: any, value?: any): void {
    it(`Data passed is of ${dataType} data type`, () => assert.equal(getType(value), equalityCheck));
}
