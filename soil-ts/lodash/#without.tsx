import { nativeSlice } from "./basic/_global";
import baseDifference from "./_internal/_baseDifference";
import isArrayLikeObject from "./#isArrayLikeObject";

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `pull`, this method returns a new array.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see difference, union, unionBy, unionWith, xor, xorBy, xorWith
 * @example
 *
 * without([2, 1, 2, 3], 1, 2)
 * // => [3]
 */
function without<T>(array: Array<T>, ...values: Array<T>): Array<T> {
    const othValues = nativeSlice.call(arguments, 1);
    return isArrayLikeObject(array) ? baseDifference(array, othValues) : [];
}

export default without;
// import baseDifference from "./_internal/baseDifference.js";
// import isArrayLikeObject from "./isArrayLikeObject.js";

// /**
//  * Creates an array excluding all given values using
//  * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
//  * for equality comparisons.
//  *
//  * **Note:** Unlike `pull`, this method returns a new array.
//  *
//  * @since 0.1.0
//  * @category Array
//  * @param {Array} array The array to inspect.
//  * @param {...*} [values] The values to exclude.
//  * @returns {Array} Returns the new array of filtered values.
//  * @see difference, union, unionBy, unionWith, xor, xorBy, xorWith
//  * @example
//  *
//  * without([2, 1, 2, 3], 1, 2)
//  * // => [3]
//  */
// function without(array, ...values) {
//     return isArrayLikeObject(array) ? baseDifference(array, values) : [];
// }

// export default without;
