/**
 * Composes a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @since 3.0.0
 * @category Util
 * @param {Function[]} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see flowRight
 * @example
 *
 * import add from 'lodash/add'
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * const addSquare = flow(add, square)
 * addSquare(1, 2)
 * // => 9
 */
function flow<A extends any[], R1, R2, R3, R4, R5, R6, R7>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (...args: A) => R7;
function flow<A extends any[], R1, R2, R3, R4, R5, R6>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (...args: A) => R6;
function flow<A extends any[], R1, R2, R3, R4, R5>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (...args: A) => R5;
function flow<A extends any[], R1, R2, R3, R4>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (...args: A) => R4;
function flow<A extends any[], R1, R2, R3>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (...args: A) => R3;
function flow<A extends any[], R1, R2>(f1: (...args: A) => R1, f2: (a: R1) => R2): (...args: A) => R2;
function flow(...funcs: Array<AnyFunction>): AnyFunction {
    const values = arguments;
    const length = values.length;
    let index = length;
    while (index--) {
        if (typeof values[index] !== "function") {
            throw new Error("Expected a function");
        }
    }
    return function (this: any, ...args: Array<any>) {
        let index = 0;
        let result = length ? args[index].apply(this, args) : args[0];
        while (++index < length) {
            result = args[index].call(this, result);
        }
        return result;
    };
}

export default flow;
// /**
//  * Composes a function that returns the result of invoking the given functions
//  * with the `this` binding of the created function, where each successive
//  * invocation is supplied the return value of the previous.
//  *
//  * @since 3.0.0
//  * @category Util
//  * @param {Function[]} [funcs] The functions to invoke.
//  * @returns {Function} Returns the new composite function.
//  * @see flowRight
//  * @example
//  *
//  * import add from 'lodash/add'
//  *
//  * function square(n) {
//  *   return n * n
//  * }
//  *
//  * const addSquare = flow(add, square)
//  * addSquare(1, 2)
//  * // => 9
//  */
// function flow(...funcs) {
//     const length = funcs.length;
//     let index = length;
//     while (index--) {
//         if (typeof funcs[index] !== "function") {
//             throw new TypeError("Expected a function");
//         }
//     }
//     return function (...args) {
//         let index = 0;
//         let result = length ? funcs[index].apply(this, args) : args[0];
//         while (++index < length) {
//             result = funcs[index].call(this, result);
//         }
//         return result;
//     };
// }

// export default flow;
