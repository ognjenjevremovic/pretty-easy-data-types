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
export default function (valueReturnedShouldBe: string, isOfCertainDataTypeMethod: (argumentSuppliedToMethod: any) => boolean, getDataTypeFromValue?: any): void;
