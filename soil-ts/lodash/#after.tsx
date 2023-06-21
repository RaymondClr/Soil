/**
 * The opposite of `before`. This method creates a function that invokes
 * `func` once it's called `n` or more times.
 *
 * @since 0.1.0
 * @category Function
 * @param {number} n The number of calls before `func` is invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * const saves = ['profile', 'settings']
 * const done = after(saves.length, () => console.log('done saving!'))
 *
 * forEach(saves, type => asyncSave({ 'type': type, 'complete': done }))
 * // => Logs 'done saving!' after the two async saves have completed.
 */
function after(n: number, func: () => any): (this: any, ...args: Array<any>) => any {
    if (typeof func !== "function") {
        throw new Error("Expected a function");
    }
    n = n || 0;
    return function (this: any, ...args: any[]) {
        if (--n < 1) {
            return func.apply(this, arguments);
        }
    };
}

export default after;
// /**
//  * The opposite of `before`. This method creates a function that invokes
//  * `func` once it's called `n` or more times.
//  *
//  * @since 0.1.0
//  * @category Function
//  * @param {number} n The number of calls before `func` is invoked.
//  * @param {Function} func The function to restrict.
//  * @returns {Function} Returns the new restricted function.
//  * @example
//  *
//  * const saves = ['profile', 'settings']
//  * const done = after(saves.length, () => console.log('done saving!'))
//  *
//  * forEach(saves, type => asyncSave({ 'type': type, 'complete': done }))
//  * // => Logs 'done saving!' after the two async saves have completed.
//  */
// function after(n, func) {
//     if (typeof func !== "function") {
//         throw new TypeError("Expected a function");
//     }
//     n = n || 0;
//     return function (...args) {
//         if (--n < 1) {
//             return func.apply(this, args);
//         }
//     };
// }

// export default after;
