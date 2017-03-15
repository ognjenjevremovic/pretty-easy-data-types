//  Dependancy
import { getType } from '../getType';

/**
 * @description
 *  Checks if the provided value is
 *  an instance of Date class
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export const isDate = (value: any): boolean => getType(value) === 'date';
