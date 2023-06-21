import baseFlatten from "./_internal/_baseFlatten";
import map from "./#map";

/**
 * This method is like `flatMap` except that it recursively flattens the
 * mapped results up to `depth` times.
 *
 * @since 4.7.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDeep, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]]
 * }
 *
 * flatMapDepth([1, 2], duplicate, 2)
 * // => [[1, 1], [2, 2]]
 */
function flatMapDepth<T, TResult>(array: Array<T>, iteratee: ListIterator<T, NestedArray<TResult> | TResult>, depth?: number): Array<TResult> {
    depth = depth === undefined ? 1 : +depth;
    let values = map(array, iteratee);
    return baseFlatten(values, depth);
}

export default flatMapDepth;
// import baseFlatten from "./_internal/baseFlatten.js";
// import map from "./map.js";

// /**
//  * This method is like `flatMap` except that it recursively flattens the
//  * mapped results up to `depth` times.
//  *
//  * @since 4.7.0
//  * @category Collection
//  * @param {Array|Object} collection The collection to iterate over.
//  * @param {Function} iteratee The function invoked per iteration.
//  * @param {number} [depth=1] The maximum recursion depth.
//  * @returns {Array} Returns the new flattened array.
//  * @see flatMap, flatMapDeep, flatten, flattenDeep, flattenDepth, map, mapKeys, mapValues
//  * @example
//  *
//  * function duplicate(n) {
//  *   return [[[n, n]]]
//  * }
//  *
//  * flatMapDepth([1, 2], duplicate, 2)
//  * // => [[1, 1], [2, 2]]
//  */
// function flatMapDepth(collection, iteratee, depth) {
//     depth = depth === undefined ? 1 : +depth;
//     return baseFlatten(map(collection, iteratee), depth);
// }

// export default flatMapDepth;
