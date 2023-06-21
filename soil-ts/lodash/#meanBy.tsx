import { NAN } from "./basic/_global";
import baseSum from "./_internal/_baseSum.jsx";

/**
 * This method is like `mean` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be averaged.
 * The iteratee is invoked with one argument: (value).
 *
 * @since 4.7.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {number} Returns the mean.
 * @example
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 *
 * meanBy(objects, ({ n }) => n)
 * // => 5
 */
function meanBy<T>(array: Array<T>, iteratee: (value: T) => number): number {
    const length = array.length;
    if (length === 0) {
        return NAN;
    }
    return baseSum(array, iteratee) / length;
}

export default meanBy;
// import baseSum from "./_internal/baseSum.js";

// /** Used as references for various `Number` constants. */
// const NAN = 0 / 0;

// /**
//  * This method is like `mean` except that it accepts `iteratee` which is
//  * invoked for each element in `array` to generate the value to be averaged.
//  * The iteratee is invoked with one argument: (value).
//  *
//  * @since 4.7.0
//  * @category Math
//  * @param {Array} array The array to iterate over.
//  * @param {Function} iteratee The iteratee invoked per element.
//  * @returns {number} Returns the mean.
//  * @example
//  *
//  * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
//  *
//  * meanBy(objects, ({ n }) => n)
//  * // => 5
//  */
// function meanBy(array, iteratee) {
//     const length = array == null ? 0 : array.length;
//     return length ? baseSum(array, iteratee) / length : NAN;
// }

// export default meanBy;
