//  Dependancies
import * as assert from 'assert';
import { getType as getValueDataType } from '../..';


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
 * @param {*} [getDataTypeFromThisValue]
 */
export default function(
    valueReturnedShouldBe   : string,
    dataTypeOfValueShouldBe : string,
    getDataTypeFromValue?   : any,
) : void {

    it(
        `${moduleShouldReturn} ${dataTypeOfValueShouldBe} from -> ${valueReturnedShouldBe} data type value`,
        () => assert.equal(getValueDataType(getDataTypeFromValue), dataTypeOfValueShouldBe)
    );
}
