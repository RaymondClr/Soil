/**
 * This method is like `reduce` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see reduce
 * @example
 *
 * const array = [[0, 1], [2, 3], [4, 5]]
 *
 * reduceRight(array, (flattened, other) => flattened.concat(other), [])
 * // => [4, 5, 2, 3, 0, 1]
 */
function reduceRight<T>(array: Array<T>, reducer: Reducer<T, T>): T | undefined;
function reduceRight<T, TResult>(array: Array<T>, reducer: Reducer<T, TResult>, initialValue: TResult): TResult;
function reduceRight<T, TResult>(array: Array<T>, iteratee: Reducer<T, TResult>, initialValue?: TResult): TResult | undefined {
    let length = array.length;
    if (length === 0 && initialValue === undefined) {
        return undefined;
    }

    let accumulator: TResult | T = initialValue === undefined ? array[0] : initialValue;
    let startIndex = initialValue === undefined ? 0 : -1;

    while (startIndex < length--) {
        accumulator = iteratee(accumulator as TResult, array[length], length, array);
    }
    return accumulator as TResult;
}

export default reduceRight;
// import arrayReduceRight from "./_internal/arrayReduceRight.js";
// import baseEachRight from "./_internal/baseEachRight.js";
// import baseReduce from "./_internal/baseReduce.js";

// /**
//  * This method is like `reduce` except that it iterates over elements of
//  * `collection` from right to left.
//  *
//  * @since 0.1.0
//  * @category Collection
//  * @param {Array|Object} collection The collection to iterate over.
//  * @param {Function} iteratee The function invoked per iteration.
//  * @param {*} [accumulator] The initial value.
//  * @returns {*} Returns the accumulated value.
//  * @see reduce
//  * @example
//  *
//  * const array = [[0, 1], [2, 3], [4, 5]]
//  *
//  * reduceRight(array, (flattened, other) => flattened.concat(other), [])
//  * // => [4, 5, 2, 3, 0, 1]
//  */
// function reduceRight(collection, iteratee, accumulator) {
//     const func = Array.isArray(collection) ? arrayReduceRight : baseReduce;
//     const initAccum = arguments.length < 3;
//     return func(collection, iteratee, accumulator, initAccum, baseEachRight);
// }

// export default reduceRight;
