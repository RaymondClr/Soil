import baseSum from "./_internal/_baseSum";

/**
 * Computes the sum of the values in `array`.
 *
 * @since 3.4.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 * @example
 *
 * sum([4, 2, 8, 6])
 * // => 20
 */
function sum(array: Array<number>): number {
    return array != null && array.length ? baseSum(array, value => value) : 0;
}

export default sum;
// import baseSum from "./_internal/baseSum.js";

// /**
//  * Computes the sum of the values in `array`.
//  *
//  * @since 3.4.0
//  * @category Math
//  * @param {Array} array The array to iterate over.
//  * @returns {number} Returns the sum.
//  * @example
//  *
//  * sum([4, 2, 8, 6])
//  * // => 20
//  */
// function sum(array) {
//     return array != null && array.length ? baseSum(array, value => value) : 0;
// }

// export default sum;
