//  Dependancy
import { getType as getDataTypeOfValue } from '..';


/**
 * @description
 *  Checks if provided argument is an instance of an Object class
 *
 *  (Instances of classes that derive from an Object class, such as Array, Error, Date
 *  are of different data type - meaning, they're not instances of Object and
 *  thus this check will return boolean false for those data types)
 *
 * @export
 * @param {*} argumentSuppliedToMethod
 * @returns {boolean}
 */
export default (argumentSuppliedToMethod : any) : boolean => getDataTypeOfValue(argumentSuppliedToMethod) === 'object';
