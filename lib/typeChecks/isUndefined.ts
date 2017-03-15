//  Dependancy
import { getType } from '../getType';

/**
 * @description
 *  Checks if the provided value is undefined
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export const isUndefined = (value: any): boolean => getType(value) === 'undefined';
