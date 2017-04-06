//  Dependancy
import { getType as getDataTypeOfValue } from '..';


/**
 * @description
 *  Checks if provided argument is an instance of a Error class
 *
 * @export
 * @param {*} argumentSuppliedToMethod
 * @returns {boolean}
 */
export default (argumentSuppliedToMethod : any) : boolean => getDataTypeOfValue(argumentSuppliedToMethod) === 'error';
