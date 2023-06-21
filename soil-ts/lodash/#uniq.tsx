import baseUniq from "./_internal/_baseUniq";

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @see uniqBy, uniqWith
 * @example
 *
 * uniq([2, 1, 2])
 * // => [2, 1]
 */
function uniq<T extends Array<any>>(array: readonly [...T]): Array<T extends Array<infer U> ? U : T> {
    return array != null && array.length ? baseUniq(array) : [];
}

export default uniq;
// import baseUniq from "./_internal/baseUniq.js";

// /**
//  * Creates a duplicate-free version of an array, using
//  * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
//  * for equality comparisons, in which only the first occurrence of each element
//  * is kept. The order of result values is determined by the order they occur
//  * in the array.
//  *
//  * @since 0.1.0
//  * @category Array
//  * @param {Array} array The array to inspect.
//  * @returns {Array} Returns the new duplicate free array.
//  * @see uniqBy, uniqWith
//  * @example
//  *
//  * uniq([2, 1, 2])
//  * // => [2, 1]
//  */
// function uniq(array) {
//     return array != null && array.length ? baseUniq(array) : [];
// }

// export default uniq;
