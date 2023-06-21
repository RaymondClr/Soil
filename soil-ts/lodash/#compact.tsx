/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */

function compact<T>(array: Array<T | Falsey>): Array<T> {
    let index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
        let value = array[index];
        if (value) {
            result[resIndex++] = value;
        }
    }
    return result;
}

export default compact;
// /**
//  * Creates an array with all falsey values removed. The values `false`, `null`,
//  * `0`, `""`, `undefined`, and `NaN` are falsey.
//  *
//  * @since 0.1.0
//  * @category Array
//  * @param {Array} array The array to compact.
//  * @returns {Array} Returns the new array of filtered values.
//  * @example
//  *
//  * compact([0, 1, false, 2, '', 3])
//  * // => [1, 2, 3]
//  */
// function compact(array) {
//     let resIndex = 0;
//     const result = [];

//     if (array == null) {
//         return result;
//     }

//     for (const value of array) {
//         if (value) {
//             result[resIndex++] = value;
//         }
//     }
//     return result;
// }

// export default compact;
