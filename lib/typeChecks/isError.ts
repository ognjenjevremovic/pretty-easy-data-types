//  Dependancy
import { getType } from '../getType';

/**
 * @description
 *  Checks if the provided value is
 *  an instance of Error class
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export const isError = (value: any): boolean => getType(value) === 'error';
