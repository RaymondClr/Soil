import getTag from "./_internal/_getTag";
import isObjectLike from "./#isObjectLike";

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `Number.isFinite` method.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @see isInteger, toInteger, toNumber
 * @example
 *
 * isNumber(3)
 * // => true
 *
 * isNumber(Number.MIN_VALUE)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber('3')
 * // => false
 */
function isNumber(value: any): value is number {
    return typeof value === "number" || (isObjectLike(value) && getTag(value) == "[object Number]");
}

export default isNumber;
// import getTag from "./_internal/getTag.js";
// import isObjectLike from "./isObjectLike.js";

// /**
//  * Checks if `value` is classified as a `Number` primitive or object.
//  *
//  * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
//  * classified as numbers, use the `Number.isFinite` method.
//  *
//  * @since 0.1.0
//  * @category Lang
//  * @param {*} value The value to check.
//  * @returns {boolean} Returns `true` if `value` is a number, else `false`.
//  * @see isInteger, toInteger, toNumber
//  * @example
//  *
//  * isNumber(3)
//  * // => true
//  *
//  * isNumber(Number.MIN_VALUE)
//  * // => true
//  *
//  * isNumber(Infinity)
//  * // => true
//  *
//  * isNumber('3')
//  * // => false
//  */
// function isNumber(value) {
//     return typeof value === "number" || (isObjectLike(value) && getTag(value) == "[object Number]");
// }

// export default isNumber;
