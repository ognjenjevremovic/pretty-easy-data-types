/**
 * @description
 *  Get the data type of the value passed,
 *  supply it to the comparator
 *  and perform the check
 *
 * @export
 * @param {string} comparator
 * @param {(value: any) => boolean} check
 * @param {*} [value]
 */
export declare function validate(comparator: string, check: (value: any) => boolean, value?: any): void;
