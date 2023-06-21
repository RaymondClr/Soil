import baseFlatten from "./_internal/_baseFlatten";
import baseUniq from "./_internal/_baseUniq";
import isArrayLikeObject from "./#isArrayLikeObject";
import last from "./#last";

/**
 * This method is like `union` except that it accepts `iteratee` which is
 * invoked for each element of each `arrays` to generate the criterion by
 * which uniqueness is computed. Result values are chosen from the first
 * array in which the value occurs. The iteratee is invoked with one argument:
 * (value).
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of combined values.
 * @see difference, union, unionWith, without, xor, xorBy
 * @example
 *
 * unionBy([2.1], [1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 */

function unionBy<T>(...arrays: Array<Array<T>>): Array<T> {
    let iteratee = last(arrays);
    if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
    }
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), iteratee);
}

export default unionBy;
// import baseFlatten from "./_internal/baseFlatten.js";
// import baseUniq from "./_internal/baseUniq.js";
// import isArrayLikeObject from "./isArrayLikeObject.js";
// import last from "./last.js";

// /**
//  * This method is like `union` except that it accepts `iteratee` which is
//  * invoked for each element of each `arrays` to generate the criterion by
//  * which uniqueness is computed. Result values are chosen from the first
//  * array in which the value occurs. The iteratee is invoked with one argument:
//  * (value).
//  *
//  * @since 4.0.0
//  * @category Array
//  * @param {...Array} [arrays] The arrays to inspect.
//  * @param {Function} iteratee The iteratee invoked per element.
//  * @returns {Array} Returns the new array of combined values.
//  * @see difference, union, unionWith, without, xor, xorBy
//  * @example
//  *
//  * unionBy([2.1], [1.2, 2.3], Math.floor)
//  * // => [2.1, 1.2]
//  */
// function unionBy(...arrays) {
//     let iteratee = last(arrays);
//     if (isArrayLikeObject(iteratee)) {
//         iteratee = undefined;
//     }
//     return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), iteratee);
// }

// export default unionBy;
