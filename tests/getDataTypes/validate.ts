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
 * @param {string} dataTypeOfArgumentSupplied
 * @param {string} dataTypeOfValueShouldBe
 * @param {*} [getDataTypeFromValue]
 */
export default function(
    dataTypeOfArgumentSupplied  : string,
    dataTypeOfValueShouldBe     : string,
    getDataTypeFromValue?       : any,
) : void {

    it(
        `${moduleShouldReturn} ${dataTypeOfValueShouldBe} from -> ${dataTypeOfArgumentSupplied} data type value`,
        () => assert.equal(getValueDataType(getDataTypeFromValue), dataTypeOfValueShouldBe)
    );
}
