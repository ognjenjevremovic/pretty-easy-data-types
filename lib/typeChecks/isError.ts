//  Dependancy
import { getType as getValuesDataType } from '..';


/**
 * @description
 *  Checks if the provided value is an instance of a Error class
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export default (valueSupplied : any) : boolean => getValuesDataType(valueSupplied) === 'error';
