//  Dependancy
import { getType } from '../getType';

/**
 * @description
 *  Checks if the provided value is object literal
 *  or an instance of Object and not an instance of
 *  a class derived from Object class (Array, Error, Date)
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export const isObject = (value: any): boolean => getType(value) === 'object';
