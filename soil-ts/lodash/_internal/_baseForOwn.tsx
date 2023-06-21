import baseFor from "./_baseFor";
import keys from "../#keys";

/**
 * The base implementation of `forOwn`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn<T extends object>(object: T, iteratee: ObjectIterator<T, boolean | void>): object {
    return object && baseFor(object, iteratee, keys);
}

export default baseForOwn;
// import baseFor from "./baseFor.js";
// import keys from "../keys.js";

// /**
//  * The base implementation of `forOwn`.
//  *
//  * @private
//  * @param {Object} object The object to iterate over.
//  * @param {Function} iteratee The function invoked per iteration.
//  * @returns {Object} Returns `object`.
//  */
// function baseForOwn(object, iteratee) {
//     return object && baseFor(object, iteratee, keys);
// }

// export default baseForOwn;
