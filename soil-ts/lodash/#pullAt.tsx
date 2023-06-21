import baseAt from "./_internal/_baseAt";
import basePullAt from "./_internal/_basePullAt";
import compareAscending from "./_internal/_compareAscending";
import isIndex from "./_internal/_isIndex";
import map from "./#map";
import { nativeSlice } from "./basic/_global";

/**
 * Removes elements from `array` corresponding to `indexes` and returns an
 * array of removed elements.
 *
 * **Note:** Unlike `at`, this method mutates `array`.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...(number|number[])} [indexes] The indexes of elements to remove.
 * @returns {Array} Returns the new array of removed elements.
 * @see pull, pullAll, pullAllBy, pullAllWith, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'd']
 * const pulled = pullAt(array, [1, 3])
 *
 * console.log(array)
 * // => ['a', 'c']
 *
 * console.log(pulled)
 * // => ['b', 'd']
 */
function pullAt<T>(array: Array<T>, ...indexes: Array<number>): Array<T> {
    const values = nativeSlice.call(arguments, 1) as Array<number>;
    const length = array == null ? 0 : array.length;
    const result = baseAt(array, values);

    basePullAt(array, map(values, index => (isIndex(index, length) ? +index : index)).sort(compareAscending));
    return result;
}

export default pullAt;
// import map from "./map.js";
// import baseAt from "./_internal/baseAt.js";
// import basePullAt from "./_internal/basePullAt.js";
// import compareAscending from "./_internal/compareAscending.js";
// import isIndex from "./_internal/isIndex.js";

// /**
//  * Removes elements from `array` corresponding to `indexes` and returns an
//  * array of removed elements.
//  *
//  * **Note:** Unlike `at`, this method mutates `array`.
//  *
//  * @since 3.0.0
//  * @category Array
//  * @param {Array} array The array to modify.
//  * @param {...(number|number[])} [indexes] The indexes of elements to remove.
//  * @returns {Array} Returns the new array of removed elements.
//  * @see pull, pullAll, pullAllBy, pullAllWith, remove, reject
//  * @example
//  *
//  * const array = ['a', 'b', 'c', 'd']
//  * const pulled = pullAt(array, [1, 3])
//  *
//  * console.log(array)
//  * // => ['a', 'c']
//  *
//  * console.log(pulled)
//  * // => ['b', 'd']
//  */
// function pullAt(array, ...indexes) {
//     const length = array == null ? 0 : array.length;
//     const result = baseAt(array, indexes);

//     basePullAt(array, map(indexes, index => (isIndex(index, length) ? +index : index)).sort(compareAscending));
//     return result;
// }

// export default pullAt;
