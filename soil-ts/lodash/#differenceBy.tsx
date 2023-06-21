import baseDifference from "./_internal/_baseDifference";
import baseFlatten from "./_internal/_baseFlatten";
import isArrayLikeObject from "./#isArrayLikeObject";
import last from "./#last";

/**
 * This method is like `difference` except that it accepts `iteratee` which
 * is invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 *
 * **Note:** Unlike `pullAllBy`, this method returns a new array.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [1.2]
 */
function differenceBy<T, S extends T>(array: Array<T>, ...values: Array<any>): Array<T> {
    let iteratee = last(values) as ((value: T) => S) | undefined;
    if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
    }
    return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), iteratee) : [];
}

export default differenceBy;
// import baseDifference from "./_internal/baseDifference.js";
// import baseFlatten from "./_internal/baseFlatten.js";
// import isArrayLikeObject from "./isArrayLikeObject.js";
// import last from "./last.js";

// /**
//  * This method is like `difference` except that it accepts `iteratee` which
//  * is invoked for each element of `array` and `values` to generate the criterion
//  * by which they're compared. The order and references of result values are
//  * determined by the first array. The iteratee is invoked with one argument:
//  * (value).
//  *
//  * **Note:** Unlike `pullAllBy`, this method returns a new array.
//  *
//  * @since 4.0.0
//  * @category Array
//  * @param {Array} array The array to inspect.
//  * @param {...Array} [values] The values to exclude.
//  * @param {Function} iteratee The iteratee invoked per element.
//  * @returns {Array} Returns the new array of filtered values.
//  * @example
//  *
//  * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
//  * // => [1.2]
//  */
// function differenceBy(array, ...values) {
//     let iteratee = last(values);
//     if (isArrayLikeObject(iteratee)) {
//         iteratee = undefined;
//     }
//     return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), iteratee) : [];
// }

// export default differenceBy;
