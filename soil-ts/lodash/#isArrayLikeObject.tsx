import isArrayLike from "./#isArrayLike";
import isObjectLike from "./#isObjectLike";

/**
 * This method is like `isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject(document.body.children)
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 *
 * isArrayLikeObject(Function)
 * // => false
 */
function isArrayLikeObject(value: AnyFunction | Function | string | boolean | number | null | undefined): value is never;
function isArrayLikeObject(value: any): value is object & { length: number };
function isArrayLikeObject(value: any): boolean {
    return isObjectLike(value) && isArrayLike(value);
}

export default isArrayLikeObject;
// import isArrayLike from "./isArrayLike.js";
// import isObjectLike from "./isObjectLike.js";

// /**
//  * This method is like `isArrayLike` except that it also checks if `value`
//  * is an object.
//  *
//  * @since 4.0.0
//  * @category Lang
//  * @param {*} value The value to check.
//  * @returns {boolean} Returns `true` if `value` is an array-like object,
//  *  else `false`.
//  * @example
//  *
//  * isArrayLikeObject([1, 2, 3])
//  * // => true
//  *
//  * isArrayLikeObject(document.body.children)
//  * // => true
//  *
//  * isArrayLikeObject('abc')
//  * // => false
//  *
//  * isArrayLikeObject(Function)
//  * // => false
//  */
// function isArrayLikeObject(value) {
//     return isObjectLike(value) && isArrayLike(value);
// }

// export default isArrayLikeObject;
