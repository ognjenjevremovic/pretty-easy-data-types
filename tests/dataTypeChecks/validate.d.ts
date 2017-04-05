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
export default function (valueReturnedShouldBe: string, isOfCertainDataTypeMethod: (value: any) => boolean, getDataTypeFromThisValue?: any): void;
