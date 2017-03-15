//  Dependancy
import { getType } from '../getType';

/**
 * @description
 *  Checks if the provided value is number
 *  or an instance of Number
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export const isNumber = (value: any): boolean => getType(value) === 'number';
