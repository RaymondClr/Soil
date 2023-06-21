/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith<T, S>(array: Array<T>, target: S, comparator: (target: S, value: T) => boolean): boolean {
    if (array == null) {
        return false;
    }

    let index = -1;
    const length = array.length;

    while (++index < length) {
        const value = array[index];
        if (comparator(target, value)) {
            return true;
        }
    }
    return false;
}

export default arrayIncludesWith;
// /**
//  * This function is like `arrayIncludes` except that it accepts a comparator.
//  *
//  * @private
//  * @param {Array} [array] The array to inspect.
//  * @param {*} target The value to search for.
//  * @param {Function} comparator The comparator invoked per element.
//  * @returns {boolean} Returns `true` if `target` is found, else `false`.
//  */
// function arrayIncludesWith(array, target, comparator) {
//     if (array == null) {
//         return false;
//     }

//     for (const value of array) {
//         if (comparator(target, value)) {
//             return true;
//         }
//     }
//     return false;
// }
