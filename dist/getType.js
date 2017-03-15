"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Get a string representation of a value type
var getString = Object.prototype.toString;
/**
 * @description Returns a type of the value passed
 *
 * @export
 * @param {*} [value]
 * @returns {string}
 */
function getType(value) {
    var check = getString.call(value).split(' ');
    return check[1].substring(0, check[1].length - 1).toLocaleLowerCase();
}
exports.getType = getType;
//# sourceMappingURL=getType.js.map