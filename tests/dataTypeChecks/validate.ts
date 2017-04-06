//  Dependancies
import * as assert from 'assert';


//  What should the module return
const moduleShouldReturn : string = 'Should return boolean true from ->';


/**
 * @description
 *  Check if the method returns a boolean value of true.
 *  This is the test validator for all valid parameter values.
 *
 * @export
 * @param {string} valueReturnedShouldBe
 * @param {(argumentSuppliedToMethod : any) => boolean} isOfCertainDataTypeMethod
 * @param {*} [getDataTypeFromThisValue]
 */
export default function(
    dataTypeOfArgumentSupplied : string,
    isOfCertainDataTypeMethod  : (argumentSuppliedToMethod : any) => boolean,
    getDataTypeFromValue?      : any
) : void {

    it(`
        ${moduleShouldReturn} ${dataTypeOfArgumentSupplied} data type value`,
        () => assert.equal(isOfCertainDataTypeMethod(getDataTypeFromValue), true)
    );
}
