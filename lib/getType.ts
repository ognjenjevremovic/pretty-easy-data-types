//  Get a string representation of a value type
const getString : () => string = Object.prototype.toString;


/**
 * @description Returns a type of the value passed
 *
 * @export
 * @param {*} [value]
 * @returns {string}
 */
export function getType(value: any): string {
    const check: string[] = getString.call(value).split(' ');

    return check[1].substring(0, check[1].length - 1).toLocaleLowerCase();
}