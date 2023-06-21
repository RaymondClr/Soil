import getTag from "./_internal/_getTag";
import isObjectLike from "./#isObjectLike";

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(null)
 * // => false
 */
function isBoolean(value: any): value is boolean {
    return value === true || value === false || (isObjectLike(value) && getTag(value) == "[object Boolean]");
}

export default isBoolean;
// import getTag from "./_internal/getTag.js";
// import isObjectLike from "./isObjectLike.js";

// /**
//  * Checks if `value` is classified as a boolean primitive or object.
//  *
//  * @since 0.1.0
//  * @category Lang
//  * @param {*} value The value to check.
//  * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
//  * @example
//  *
//  * isBoolean(false)
//  * // => true
//  *
//  * isBoolean(null)
//  * // => false
//  */
// function isBoolean(value) {
//     return value === true || value === false || (isObjectLike(value) && getTag(value) == "[object Boolean]");
// }

// export default isBoolean;
