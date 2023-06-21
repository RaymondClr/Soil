import baseSortedIndex from "./_internal/_baseSortedIndex";

/**
 * Uses a binary search to determine the lowest index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * sortedIndex([30, 50], 40)
 * // => 1
 */
function sortedIndex(array: Array<any>, value: any): number {
    return baseSortedIndex(array, value);
}

export default sortedIndex;
// import baseSortedIndex from "./_internal/baseSortedIndex.js";

// /**
//  * Uses a binary search to determine the lowest index at which `value`
//  * should be inserted into `array` in order to maintain its sort order.
//  *
//  * @since 0.1.0
//  * @category Array
//  * @param {Array} array The sorted array to inspect.
//  * @param {*} value The value to evaluate.
//  * @returns {number} Returns the index at which `value` should be inserted
//  *  into `array`.
//  * @example
//  *
//  * sortedIndex([30, 50], 40)
//  * // => 1
//  */
// function sortedIndex(array, value) {
//     return baseSortedIndex(array, value);
// }

// export default sortedIndex;
