import baseFlatten from "./_internal/_baseFlatten";
import baseUniq from "./_internal/_baseUniq";
import isArrayLikeObject from "./#isArrayLikeObject";

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @see difference, unionBy, unionWith, without, xor, xorBy
 * @example
 *
 * union([2, 3], [1, 2])
 * // => [2, 3, 1]
 */
function union<T>(...arrays: Array<Array<T>>): Array<T> {
    const values = arguments as any;
    return baseUniq(baseFlatten(values, 1, isArrayLikeObject, true));
}

export default union;
// import baseFlatten from "./_internal/baseFlatten.js";
// import baseUniq from "./_internal/baseUniq.js";
// import isArrayLikeObject from "./isArrayLikeObject.js";

// /**
//  * Creates an array of unique values, in order, from all given arrays using
//  * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
//  * for equality comparisons.
//  *
//  * @since 0.1.0
//  * @category Array
//  * @param {...Array} [arrays] The arrays to inspect.
//  * @returns {Array} Returns the new array of combined values.
//  * @see difference, unionBy, unionWith, without, xor, xorBy
//  * @example
//  *
//  * union([2, 3], [1, 2])
//  * // => [2, 3, 1]
//  */
// function union(...arrays) {
//     return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
// }

// export default union;
