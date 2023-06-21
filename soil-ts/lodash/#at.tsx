import baseAt from "./_internal/_baseAt";
import baseFlatten from "./_internal/_baseFlatten";

/**
 * Creates an array of values corresponding to `paths` of `object`.
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Array} Returns the picked values.
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
 *
 * at(object, ['a[0].b.c', 'a[1]'])
 * // => [3, 4]
 */

const at = function <T>(object: Dictionary<T> | NumericDictionary<T>, paths: Array<PropertyPath>): Array<T> {
    return baseAt(object, baseFlatten(paths, 1));
};
// const at = (object, ...paths) => baseAt(object, baseFlatten(paths, 1));

export default at;
// import baseAt from "./_internal/baseAt.js";
// import baseFlatten from "./_internal/baseFlatten.js";

// /**
//  * Creates an array of values corresponding to `paths` of `object`.
//  *
//  * @since 1.0.0
//  * @category Object
//  * @param {Object} object The object to iterate over.
//  * @param {...(string|string[])} [paths] The property paths to pick.
//  * @returns {Array} Returns the picked values.
//  * @example
//  *
//  * const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
//  *
//  * at(object, ['a[0].b.c', 'a[1]'])
//  * // => [3, 4]
//  */
// const at = (object, ...paths) => baseAt(object, baseFlatten(paths, 1));

// export default at;
