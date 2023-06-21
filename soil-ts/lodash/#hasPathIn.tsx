import isArray from "./basic/isArray";
import castPath from "./_internal/_castPath";
import isIndex from "./_internal/_isIndex";
import toKey from "./_internal/_toKey";
import isArguments from "./#isArguments";
import isLength from "./#isLength";

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @since 5.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @see has, hasIn hasPath
 * @example
 *
 * const object = { 'a': { 'b': 2 } }
 * const other = create({ 'a': create({ 'b': 2 }) })
 *
 * hasPathIn(object, 'a.b')
 * // => true
 *
 * hasPathIn(object, ['a', 'b'])
 * // => true
 */
function hasPathIn(object: any, path: PropertyPath): boolean {
    path = castPath(path, object);

    let index = -1;
    let length = path.length;
    let result = false;
    let key;

    while (++index < length) {
        key = toKey(path[index]);
        if (!(result = object != null && key in Object(object))) {
            break;
        }
        object = object[key];
    }
    if (result || ++index != length) {
        return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

export default hasPathIn;
// import castPath from "./_internal/castPath.js";
// import isArguments from "./isArguments.js";
// import isIndex from "./_internal/isIndex.js";
// import isLength from "./isLength.js";
// import toKey from "./_internal/toKey.js";

// /**
//  * Checks if `path` is a direct property of `object`.
//  *
//  * @since 5.0.0
//  * @category Object
//  * @param {Object} object The object to query.
//  * @param {Array|string} path The path to check.
//  * @returns {boolean} Returns `true` if `path` exists, else `false`.
//  * @see has, hasIn hasPath
//  * @example
//  *
//  * const object = { 'a': { 'b': 2 } }
//  * const other = create({ 'a': create({ 'b': 2 }) })
//  *
//  * hasPathIn(object, 'a.b')
//  * // => true
//  *
//  * hasPathIn(object, ['a', 'b'])
//  * // => true
//  */
// function hasPathIn(object, path) {
//     path = castPath(path, object);

//     let index = -1;
//     let { length } = path;
//     let result = false;
//     let key;

//     while (++index < length) {
//         key = toKey(path[index]);
//         if (!(result = object != null && key in Object(object))) {
//             break;
//         }
//         object = object[key];
//     }
//     if (result || ++index != length) {
//         return result;
//     }
//     length = object == null ? 0 : object.length;
//     return !!length && isLength(length) && isIndex(key, length) && (Array.isArray(object) || isArguments(object));
// }

// export default hasPathIn;
