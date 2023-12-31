import { INFINITY } from "./basic/_global";
import baseFlatten from "./_internal/_baseFlatten";
import map from "./#map";

/**
 * This method is like `flatMap` except that it recursively flattens the
 * mapped results.
 *
 * @since 4.7.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDepth, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]]
 * }
 *
 * flatMapDeep([1, 2], duplicate)
 * // => [1, 1, 2, 2]
 */
function flatMapDeep<T, TResult>(array: Array<T>, iteratee: ListIterator<T, NestedArray<TResult> | TResult>): Array<TResult> {
    return baseFlatten(map(array, iteratee), INFINITY);
}

export default flatMapDeep;
// import baseFlatten from "./_internal/baseFlatten.js";
// import map from "./map.js";

// /** Used as references for various `Number` constants. */
// const INFINITY = 1 / 0;

// /**
//  * This method is like `flatMap` except that it recursively flattens the
//  * mapped results.
//  *
//  * @since 4.7.0
//  * @category Collection
//  * @param {Array|Object} collection The collection to iterate over.
//  * @param {Function} iteratee The function invoked per iteration.
//  * @returns {Array} Returns the new flattened array.
//  * @see flatMap, flatMapDepth, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
//  * @example
//  *
//  * function duplicate(n) {
//  *   return [[[n, n]]]
//  * }
//  *
//  * flatMapDeep([1, 2], duplicate)
//  * // => [1, 1, 2, 2]
//  */
// function flatMapDeep(collection, iteratee) {
//     return baseFlatten(map(collection, iteratee), INFINITY);
// }

// export default flatMapDeep;
