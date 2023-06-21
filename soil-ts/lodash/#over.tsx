import map from "./#map";

/**
 * Creates a function that invokes `iteratees` with the arguments it receives
 * and returns their results.
 *
 * @since 4.0.0
 * @category Util
 * @param {Function[]} [iteratees=[identity]]
 *  The iteratees to invoke.
 * @returns {Function} Returns the new function.
 * @example
 *
 * const func = over([Math.max, Math.min])
 *
 * func(1, 2, 3, 4)
 * // => [4, 1]
 */
function over<T, R>(iteratees: Array<Iteratee<T, R>>): Iteratee<T, Array<R>> {
    return function (this: any, ...args: Array<T>): Array<R> {
        const values = arguments;
        return map(iteratees, iteratee => iteratee.apply(this, values));
    };
}

export default over;
// import map from "./map.js";

// /**
//  * Creates a function that invokes `iteratees` with the arguments it receives
//  * and returns their results.
//  *
//  * @since 4.0.0
//  * @category Util
//  * @param {Function[]} [iteratees=[identity]]
//  *  The iteratees to invoke.
//  * @returns {Function} Returns the new function.
//  * @example
//  *
//  * const func = over([Math.max, Math.min])
//  *
//  * func(1, 2, 3, 4)
//  * // => [4, 1]
//  */
// function over(iteratees) {
//     return function (...args) {
//         return map(iteratees, iteratee => iteratee.apply(this, args));
//     };
// }

// export default over;
