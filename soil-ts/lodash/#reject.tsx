import filter from "./#filter";

/**
 * The opposite of `filter` this method returns the elements of `collection`
 * that `predicate` does **not** return truthy for.
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} array The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, filter
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * reject(users, ({ active }) => active)
 * // => objects for ['fred']
 */
function reject<T, S extends T>(array: Array<T>, predicate: ArrayIteratorTypeGuard<T, S>): Array<S> {
    return filter(array, function (value, index, array): value is S {
        return !predicate(value, index, array);
    });
}

export default reject;
// import filter from "./filter.js";
// import filterObject from "./filterObject.js";
// import negate from "./negate.js";

// /**
//  * The opposite of `filter` this method returns the elements of `collection`
//  * that `predicate` does **not** return truthy for.
//  *
//  * @since 0.1.0
//  * @category Collection
//  * @param {Array|Object} collection The collection to iterate over.
//  * @param {Function} predicate The function invoked per iteration.
//  * @returns {Array} Returns the new filtered array.
//  * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, filter
//  * @example
//  *
//  * const users = [
//  *   { 'user': 'barney', 'active': true },
//  *   { 'user': 'fred',   'active': false }
//  * ]
//  *
//  * reject(users, ({ active }) => active)
//  * // => objects for ['fred']
//  */
// function reject(collection, predicate) {
//     const func = Array.isArray(collection) ? filter : filterObject;
//     return func(collection, negate(predicate));
// }

// export default reject;
