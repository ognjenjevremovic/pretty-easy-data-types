//  Dependancies
import * as assert from 'assert';
import { getType } from '../..';


//  What should the module return
const moduleShouldReturn : string = 'Should return';


/**
 * @description
 *  Compare the value returned by the method, with the value expected.
 *  This is the test validator for all valid parameter values.
 *
 * @export
 * @param {string} valueReturnedShouldBe
 * @param {string} dataTypeOfValueShouldBe
 * @param {*} [getDataTypeOfValue]
 */
export default function(
    valueReturnedShouldBe   : string,
    dataTypeOfValueShouldBe : string,
    getDataTypeOfValue?     : any,
) : void {

    it(
        `${moduleShouldReturn} ${dataTypeOfValueShouldBe} -> ${valueReturnedShouldBe} data type`,
        () => assert.equal(getType(getDataTypeOfValue), dataTypeOfValueShouldBe)
    );
}
