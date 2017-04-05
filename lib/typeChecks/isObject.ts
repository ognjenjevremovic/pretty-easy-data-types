//  Dependancy
import { getType as getValuesDataType } from '..';


/**
 * @description
 *  Checks if the provided value is an instance of an Object class
 *
 *  (Instances of classes that derive from an Object class, such as Array, Error, Date
 *  are of different data type - meaning, they're not instances of Object and
 *  thus this check will return boolean false for those data types)
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export default (valueSupplied : any) : boolean => getValuesDataType(valueSupplied) === 'object';
