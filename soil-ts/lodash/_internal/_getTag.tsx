import { nativeToString } from "../basic/_global";

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value: any): string {
    if (value == null) {
        return value === undefined ? "[object Undefined]" : "[object Null]";
    }
    return nativeToString.call(value);
}

export default getTag;
// const toString = Object.prototype.toString;

// /**
//  * Gets the `toStringTag` of `value`.
//  *
//  * @private
//  * @param {*} value The value to query.
//  * @returns {string} Returns the `toStringTag`.
//  */
// function getTag(value) {
//     if (value == null) {
//         return value === undefined ? "[object Undefined]" : "[object Null]";
//     }
//     return toString.call(value);
// }

// export default getTag;
