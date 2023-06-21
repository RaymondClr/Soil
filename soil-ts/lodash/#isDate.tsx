import getTag from "./_internal/_getTag";
import isObjectLike from "./#isObjectLike";

/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * isDate(new Date)
 * // => true
 *
 * isDate('Mon April 23 2012')
 * // => false
 */
function isDate(value: any): value is Date {
    return isObjectLike(value) && getTag(value) == "[object Date]";
}

export default isDate;
// import getTag from "./_internal/getTag.js";
// import isObjectLike from "./isObjectLike.js";
// import nodeTypes from "./_internal/nodeTypes.js";

// /* Node.js helper references. */
// const nodeIsDate = nodeTypes && nodeTypes.isDate;

// /**
//  * Checks if `value` is classified as a `Date` object.
//  *
//  * @since 0.1.0
//  * @category Lang
//  * @param {*} value The value to check.
//  * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
//  * @example
//  *
//  * isDate(new Date)
//  * // => true
//  *
//  * isDate('Mon April 23 2012')
//  * // => false
//  */
// const isDate = nodeIsDate ? value => nodeIsDate(value) : value => isObjectLike(value) && getTag(value) == "[object Date]";

// export default isDate;
