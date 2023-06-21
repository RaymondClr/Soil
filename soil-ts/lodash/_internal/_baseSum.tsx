/**
 * The base implementation of `sum` and `sumBy`.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum<T>(array: Array<T>, iteratee: (value: T) => number): number {
    let index = -1,
        length = array.length,
        result;

    while (++index < length) {
        const value = array[index];
        const current = iteratee(value);
        if (current !== undefined) {
            result = result === undefined ? current : result + current;
        }
    }
    return result as number;
}

export default baseSum;
// /**
//  * The base implementation of `sum` and `sumBy`.
//  *
//  * @private
//  * @param {Array} array The array to iterate over.
//  * @param {Function} iteratee The function invoked per iteration.
//  * @returns {number} Returns the sum.
//  */
// function baseSum(array, iteratee) {
//     let result;

//     for (const value of array) {
//         const current = iteratee(value);
//         if (current !== undefined) {
//             result = result === undefined ? current : result + current;
//         }
//     }
//     return result;
// }

// export default baseSum;
