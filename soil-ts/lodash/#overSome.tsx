import some from "./#some";

/**
 * Creates a function that checks if **any** of the `predicates` return
 * truthy when invoked with the arguments it receives.
 *
 * @since 4.0.0
 * @category Util
 * @param {Function[]} [predicates=[identity]]
 *  The predicates to check.
 * @returns {Function} Returns the new function.
 * @example
 *
 * const func = overSome([Boolean, isFinite])
 *
 * func('1')
 * // => true
 *
 * func(null)
 * // => true
 *
 * func(NaN)
 * // => false
 */
function overSome<T>(iteratees: Array<(...args: Array<any>) => boolean>): Predicate<T> {
    return function (...args: Array<T>): boolean {
        const values = arguments;
        return some(iteratees, function (this: any, iteratee) {
            return iteratee.apply(this, values);
        });
    };
}

export default overSome;
// import some from "./some.js";

// /**
//  * Creates a function that checks if **any** of the `predicates` return
//  * truthy when invoked with the arguments it receives.
//  *
//  * @since 4.0.0
//  * @category Util
//  * @param {Function[]} [predicates=[identity]]
//  *  The predicates to check.
//  * @returns {Function} Returns the new function.
//  * @example
//  *
//  * const func = overSome([Boolean, isFinite])
//  *
//  * func('1')
//  * // => true
//  *
//  * func(null)
//  * // => true
//  *
//  * func(NaN)
//  * // => false
//  */
// function overSome(iteratees) {
//     return function (...args) {
//         return some(iteratees, iteratee => iteratee.apply(this, args));
//     };
// }

// export default overSome;
