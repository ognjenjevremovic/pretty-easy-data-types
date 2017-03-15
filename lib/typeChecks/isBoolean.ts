//  Dependancy
import { getType } from '../getType';

/**
 * @description
 *  Checks if the provided value is boolean
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export const isBoolean = (value: any): boolean => getType(value) === 'boolean';
