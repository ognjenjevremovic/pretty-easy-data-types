/**
 * @description
 *  Get the string representation of value's data type
 *
 * @returns {() => string}
 */
const getStringRepresentationOfDataType : () => string = Object.prototype.toString;


/**
 * @description
 *  Returns a string representing the data type
 *  of the argument supplied, in all lowercase letters
 *
 * @export
 * @param {*} value
 * @returns {string}
 */
export default (
    valueSupplied : any
) : string => getStringRepresentationOfDataType
    .call(valueSupplied)
    .split(' ')[1]
    .replace(/\W/g, '')
    .toLocaleLowerCase();
