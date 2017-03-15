//  Dependancy
import { getType } from '../getType';

/**
 * @description
 *  Checks if the provided value is string
 *  or an instance of String constructor
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export const isString = (value: any): boolean => getType(value) === 'string';
