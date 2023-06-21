import isArray from "./basic/isArray";
import has from "./#has";
import isArguments from "./#isArguments";
import isArrayLike from "./#isArrayLike";

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */
function isEmpty(value: string): value is "";
function isEmpty(value: object): boolean;
function isEmpty<T extends object>(value: T | null | undefined): value is EmptyObjectOf<T> | null | undefined;
function isEmpty(value?: any): boolean;
function isEmpty(value: any): boolean {
    if (value == null) {
        return true;
    }
    if (isArrayLike(value) && (isArray(value) || typeof value === "string" || isArguments(value))) {
        return !value.length;
    }
    for (const key in value) {
        if (has(value, key)) {
            return false;
        }
    }
    return true;
}

export default isEmpty;
// import getTag from "./_internal/getTag.js";
// import isArguments from "./isArguments.js";
// import isArrayLike from "./isArrayLike.js";
// import isBuffer from "./isBuffer.js";
// import isPrototype from "./_internal/isPrototype.js";
// import isTypedArray from "./isTypedArray.js";

// /** Used to check objects for own properties. */
// const hasOwnProperty = Object.prototype.hasOwnProperty;

// /**
//  * Checks if `value` is an empty object, collection, map, or set.
//  *
//  * Objects are considered empty if they have no own enumerable string keyed
//  * properties.
//  *
//  * Array-like values such as `arguments` objects, arrays, buffers, strings, or
//  * jQuery-like collections are considered empty if they have a `length` of `0`.
//  * Similarly, maps and sets are considered empty if they have a `size` of `0`.
//  *
//  * @since 0.1.0
//  * @category Lang
//  * @param {*} value The value to check.
//  * @returns {boolean} Returns `true` if `value` is empty, else `false`.
//  * @example
//  *
//  * isEmpty(null)
//  * // => true
//  *
//  * isEmpty(true)
//  * // => true
//  *
//  * isEmpty(1)
//  * // => true
//  *
//  * isEmpty([1, 2, 3])
//  * // => false
//  *
//  * isEmpty('abc')
//  * // => false
//  *
//  * isEmpty({ 'a': 1 })
//  * // => false
//  */
// function isEmpty(value) {
//     if (value == null) {
//         return true;
//     }
//     if (isArrayLike(value) && (Array.isArray(value) || typeof value === "string" || typeof value.splice === "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
//         return !value.length;
//     }
//     const tag = getTag(value);
//     if (tag == "[object Map]" || tag == "[object Set]") {
//         return !value.size;
//     }
//     if (isPrototype(value)) {
//         return !Object.keys(value).length;
//     }
//     for (const key in value) {
//         if (hasOwnProperty.call(value, key)) {
//             return false;
//         }
//     }
//     return true;
// }

// export default isEmpty;
