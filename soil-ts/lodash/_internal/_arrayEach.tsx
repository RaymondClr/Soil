/**
 * A specialized version of `forEach` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach<T>(array: Array<T>, iteratee: ArrayIterator<T, boolean | void>): Array<T> {
    let index = -1;
    const length = array.length;

    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}

export default arrayEach;
// /**
//  * A specialized version of `forEach` for arrays.
//  *
//  * @private
//  * @param {Array} [array] The array to iterate over.
//  * @param {Function} iteratee The function invoked per iteration.
//  * @returns {Array} Returns `array`.
//  */
// function arrayEach(array, iteratee) {
//     let index = -1;
//     const length = array.length;

//     while (++index < length) {
//         if (iteratee(array[index], index, array) === false) {
//             break;
//         }
//     }
//     return array;
// }
