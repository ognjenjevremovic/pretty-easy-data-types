//  Dependancy
import { getType as getValuesDataType } from '..';


/**
 * @description
 *  Checks if the provided value is of a null data type
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export default (valueSupplied : any) : boolean => getValuesDataType(valueSupplied) === 'null';
