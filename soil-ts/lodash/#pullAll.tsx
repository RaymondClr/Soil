import basePullAll from "./_internal/_basePullAll";

/**
 * This method is like `pull` except that it accepts an array of values to remove.
 *
 * **Note:** Unlike `difference`, this method mutates `array`.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @returns {Array} Returns `array`.
 * @see pull, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 *
 * pullAll(array, ['a', 'c'])
 * console.log(array)
 * // => ['b', 'b']
 */
function pullAll<T>(array: Array<T>, values: Array<T>): Array<T> {
    return array != null && array.length && values != null && values.length ? basePullAll(array, values) : array;
}

export default pullAll;
// import basePullAll from "./_internal/basePullAll.js";

// /**
//  * This method is like `pull` except that it accepts an array of values to remove.
//  *
//  * **Note:** Unlike `difference`, this method mutates `array`.
//  *
//  * @since 4.0.0
//  * @category Array
//  * @param {Array} array The array to modify.
//  * @param {Array} values The values to remove.
//  * @returns {Array} Returns `array`.
//  * @see pull, pullAllBy, pullAllWith, pullAt, remove, reject
//  * @example
//  *
//  * const array = ['a', 'b', 'c', 'a', 'b', 'c']
//  *
//  * pullAll(array, ['a', 'c'])
//  * console.log(array)
//  * // => ['b', 'b']
//  */
// function pullAll(array, values) {
//     return array != null && array.length && values != null && values.length ? basePullAll(array, values) : array;
// }

// export default pullAll;
