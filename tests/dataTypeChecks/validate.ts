//  Dependancies
import * as assert from 'assert';


//  What should the module return
const moduleShouldReturn : string = 'Should return boolean true ->';


/**
 * @description
 *  Check if the method returns a boolean value of true.
 *  This is the test validator for all valid parameter values.
 * 
 * @export
 * @param {string} valueReturnedShouldBe
 * @param {(value : any) => boolean} isOfCertainDataTypeMethod
 * @param {*} [getDataTypeFromThisValue]
 */
export default function(
    valueReturnedShouldBe     : string,
    isOfCertainDataTypeMethod : (value : any) => boolean,
    getDataTypeFromThisValue? : any
) : void {

    it(`${moduleShouldReturn} ${valueReturnedShouldBe} value/data type`, () => assert.equal(isOfCertainDataTypeMethod(getDataTypeFromThisValue), true));
}
