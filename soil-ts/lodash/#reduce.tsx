/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `reduce`, `reduceRight`, and `transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see reduceRight, transform
 * @example
 *
 * reduce([1, 2], (sum, n) => sum + n, 0)
 * // => 3
 *
 * reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
 *   (result[value] || (result[value] = [])).push(key)
 *   return result
 * }, {})
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce<T>(array: Array<T>, reducer: Reducer<T, T>): T | undefined;
function reduce<T, TResult>(array: Array<T>, reducer: Reducer<T, TResult>, initialValue: TResult): TResult;
function reduce<T, TResult>(array: Array<T>, iteratee: Reducer<T, TResult>, initialValue?: TResult): TResult | undefined {
    let length = array.length;
    if (length === 0 && initialValue === undefined) {
        return undefined;
    }

    let accumulator: TResult | T = initialValue === undefined ? array[0] : initialValue;
    let startIndex = initialValue === undefined ? 0 : -1;
    let currentIndex = startIndex;

    while (++currentIndex < length) {
        accumulator = iteratee(accumulator as TResult, array[currentIndex], currentIndex, array);
    }
    return accumulator as TResult;
}

export default reduce;
// import arrayReduce from "./_internal/arrayReduce.js";
// import baseEach from "./_internal/baseEach.js";
// import baseReduce from "./_internal/baseReduce.js";

// /**
//  * Reduces `collection` to a value which is the accumulated result of running
//  * each element in `collection` thru `iteratee`, where each successive
//  * invocation is supplied the return value of the previous. If `accumulator`
//  * is not given, the first element of `collection` is used as the initial
//  * value. The iteratee is invoked with four arguments:
//  * (accumulator, value, index|key, collection).
//  *
//  * Many lodash methods are guarded to work as iteratees for methods like
//  * `reduce`, `reduceRight`, and `transform`.
//  *
//  * The guarded methods are:
//  * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
//  * and `sortBy`
//  *
//  * @since 0.1.0
//  * @category Collection
//  * @param {Array|Object} collection The collection to iterate over.
//  * @param {Function} iteratee The function invoked per iteration.
//  * @param {*} [accumulator] The initial value.
//  * @returns {*} Returns the accumulated value.
//  * @see reduceRight, transform
//  * @example
//  *
//  * reduce([1, 2], (sum, n) => sum + n, 0)
//  * // => 3
//  *
//  * reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
//  *   (result[value] || (result[value] = [])).push(key)
//  *   return result
//  * }, {})
//  * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
//  */
// function reduce(collection, iteratee, accumulator) {
//     const func = Array.isArray(collection) ? arrayReduce : baseReduce;
//     const initAccum = arguments.length < 3;
//     return func(collection, iteratee, accumulator, initAccum, baseEach);
// }

// export default reduce;
