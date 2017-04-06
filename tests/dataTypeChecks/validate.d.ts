/**
 * @description
 *  Check if the method returns a boolean value of true.
 *  This is the test validator for all valid parameter values.
 *
 * @export
 * @param {string} dataTypeOfArgumentSupplied
 * @param {(argumentSuppliedToMethod : any) => boolean} isOfCertainDataTypeMethod
 * @param {*} [getDataTypeFromValue]
 */
export default function (dataTypeOfArgumentSupplied: string, isOfCertainDataTypeMethod: (argumentSuppliedToMethod: any) => boolean, getDataTypeFromValue?: any): void;
