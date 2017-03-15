//  Dependancy
import { getType } from '../getType';

/**
 * @description
 *  Checks if the provided value is null
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export const isNull = (value: any): boolean => getType(value) === 'null';
