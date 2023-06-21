import baseFindIndex from "./_internal/_baseFindIndex";
import toInteger from "./#toInteger";

/**
 * This method is like `findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @see find, findIndex, findKey, findLast, findLastKey
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * findLastIndex(users, ({ user }) => user == 'pebbles')
 * // => 2
 */
function findLastIndex<T>(array: Array<T>, predicate: ListIterator<T, boolean>, fromIndex?: number): number {
    const length = array.length;
    if (length === 0) {
        return -1;
    }
    let index = length - 1;
    if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1);
    }
    return baseFindIndex(array, predicate, index, true);
}

export default findLastIndex;
// import baseFindIndex from "./_internal/baseFindIndex.js";
// import toInteger from "./toInteger.js";

// /**
//  * This method is like `findIndex` except that it iterates over elements
//  * of `collection` from right to left.
//  *
//  * @since 2.0.0
//  * @category Array
//  * @param {Array} array The array to inspect.
//  * @param {Function} predicate The function invoked per iteration.
//  * @param {number} [fromIndex=array.length-1] The index to search from.
//  * @returns {number} Returns the index of the found element, else `-1`.
//  * @see find, findIndex, findKey, findLast, findLastKey
//  * @example
//  *
//  * const users = [
//  *   { 'user': 'barney',  'active': true },
//  *   { 'user': 'fred',    'active': false },
//  *   { 'user': 'pebbles', 'active': false }
//  * ]
//  *
//  * findLastIndex(users, ({ user }) => user == 'pebbles')
//  * // => 2
//  */
// function findLastIndex(array, predicate, fromIndex) {
//     const length = array == null ? 0 : array.length;
//     if (!length) {
//         return -1;
//     }
//     let index = length - 1;
//     if (fromIndex !== undefined) {
//         index = toInteger(fromIndex);
//         index = fromIndex < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1);
//     }
//     return baseFindIndex(array, predicate, index, true);
// }

// export default findLastIndex;
