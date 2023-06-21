/**
 * The base implementation of `sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
type data = {
    criteria: any;
    index: number;
    value: any;
};

function baseSortBy<T extends data>(array: Array<T>, comparer: (a: T, b: T) => number): Array<T> {
    let length = array.length;

    array.sort(comparer);
    while (length--) {
        array[length] = array[length].value;
    }
    return array;
}

export default baseSortBy;
// /**
//  * The base implementation of `sortBy` which uses `comparer` to define the
//  * sort order of `array` and replaces criteria objects with their corresponding
//  * values.
//  *
//  * @private
//  * @param {Array} array The array to sort.
//  * @param {Function} comparer The function to define sort order.
//  * @returns {Array} Returns `array`.
//  */
// function baseSortBy(array, comparer) {
//     let { length } = array;

//     array.sort(comparer);
//     while (length--) {
//         array[length] = array[length].value;
//     }
//     return array;
// }

// export default baseSortBy;
