import { nativeSlice } from "./basic/_global";
import pullAll from "./#pullAll";

/**
 * Removes all given values from `array` using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `without`, this method mutates `array`. Use `remove`
 * to remove elements from an array by predicate.
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...*} [values] The values to remove.
 * @returns {Array} Returns `array`.
 * @see pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 *
 * pull(array, 'a', 'c')
 * console.log(array)
 * // => ['b', 'b']
 */
function pull<T>(array: Array<T>, ...args: Array<T>): Array<T> {
    const values = nativeSlice.call(arguments, 1) as Array<T>;
    return pullAll(array, values);
}

export default pull;
// import pullAll from "./pullAll.js";

// /**
//  * Removes all given values from `array` using
//  * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
//  * for equality comparisons.
//  *
//  * **Note:** Unlike `without`, this method mutates `array`. Use `remove`
//  * to remove elements from an array by predicate.
//  *
//  * @since 2.0.0
//  * @category Array
//  * @param {Array} array The array to modify.
//  * @param {...*} [values] The values to remove.
//  * @returns {Array} Returns `array`.
//  * @see pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
//  * @example
//  *
//  * const array = ['a', 'b', 'c', 'a', 'b', 'c']
//  *
//  * pull(array, 'a', 'c')
//  * console.log(array)
//  * // => ['b', 'b']
//  */
// function pull(array, ...values) {
//     return pullAll(array, values);
// }

// export default pull;
