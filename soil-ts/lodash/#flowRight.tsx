import { nativeSlice } from "./basic/_global";
import flow from "./#flow";

/**
 * This method is like `flow` except that it composes a function that
 * invokes the given functions from right to left.
 *
 * @since 3.0.0
 * @category Util
 * @param {Function[]} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see flow
 * @example
 *
 * import add from 'lodash/add'
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * const addSquare = flowRight(square, add)
 * addSquare(1, 2)
 * // => 9
 */
function flowRight<A extends any[], R1, R2, R3, R4, R5, R6, R7>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R7;
function flowRight<A extends any[], R1, R2, R3, R4, R5, R6>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R6;
function flowRight<A extends any[], R1, R2, R3, R4, R5>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R5;
function flowRight<A extends any[], R1, R2, R3, R4>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R4;
function flowRight<A extends any[], R1, R2, R3>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R3;
function flowRight<A extends any[], R1, R2>(f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R2;
function flowRight(...func: Array<AnyFunction>): AnyFunction {
    return flow.apply(null, nativeSlice.call(arguments).reverse());
}

export default flowRight;
// import flow from "./flow.js";

// /**
//  * This method is like `flow` except that it composes a function that
//  * invokes the given functions from right to left.
//  *
//  * @since 3.0.0
//  * @category Util
//  * @param {Function[]} [funcs] The functions to invoke.
//  * @returns {Function} Returns the new composite function.
//  * @see flow
//  * @example
//  *
//  * import add from 'lodash/add'
//  *
//  * function square(n) {
//  *   return n * n
//  * }
//  *
//  * const addSquare = flowRight(square, add)
//  * addSquare(1, 2)
//  * // => 9
//  */
// function flowRight(...funcs) {
//     return flow(...funcs.reverse());
// }

// export default flowRight;
