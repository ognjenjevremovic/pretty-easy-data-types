//  Dependancy
import { getType } from '../getType';

/**
 * @description
 *  Checks if the provided value is an array of values
 *  or an instance of Array
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export const isArray = (value: any): boolean => getType(value) === 'array';
