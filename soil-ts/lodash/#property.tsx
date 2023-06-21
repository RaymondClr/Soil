import baseProperty from "./_internal/_baseProperty";
import basePropertyDeep from "./_internal/_basePropertyDeep";
import isKey from "./_internal/_isKey";
import toKey from "./_internal/_toKey";

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * const objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ]
 *
 * map(objects, property('a.b'))
 * // => [2, 1]
 *
 * map(sortBy(objects, property(['a', 'b'])), 'a.b')
 * // => [1, 2]
 */
function property(path: PropertyPath): (object: any) => any {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

export default property;
// import baseProperty from "./_internal/baseProperty.js";
// import basePropertyDeep from "./_internal/basePropertyDeep.js";
// import isKey from "./_internal/isKey.js";
// import toKey from "./_internal/toKey.js";

// /**
//  * Creates a function that returns the value at `path` of a given object.
//  *
//  * @since 2.4.0
//  * @category Util
//  * @param {Array|string} path The path of the property to get.
//  * @returns {Function} Returns the new accessor function.
//  * @example
//  *
//  * const objects = [
//  *   { 'a': { 'b': 2 } },
//  *   { 'a': { 'b': 1 } }
//  * ]
//  *
//  * map(objects, property('a.b'))
//  * // => [2, 1]
//  *
//  * map(sortBy(objects, property(['a', 'b'])), 'a.b')
//  * // => [1, 2]
//  */
// function property(path) {
//     return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
// }

// export default property;
