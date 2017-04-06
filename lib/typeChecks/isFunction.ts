//  Dependancy
import { getType as getDataTypeOfValue } from '..';


/**
 * @description
 *  Checks if provided argument is of a function data type
 *
 * @export
 * @param {*} argumentSuppliedToMethod
 * @returns {boolean}
 */
export default (argumentSuppliedToMethod : any) : boolean => getDataTypeOfValue(argumentSuppliedToMethod) === 'function';
