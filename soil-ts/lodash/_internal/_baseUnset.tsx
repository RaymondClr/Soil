import castPath from "./_castPath";
import parent from "./_parent";
import toKey from "./_toKey";
import last from "../#last";

/**
 * The base implementation of `unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object: Dictionary<any>, path: PropertyPath): boolean {
    const partial = castPath(path, object);
    object = parent(object, partial);
    return object == null || delete object[toKey(last(partial))];
}

export default baseUnset;
// import castPath from "./castPath.js";
// import last from "../last.js";
// import parent from "./parent.js";
// import toKey from "./toKey.js";

// /**
//  * The base implementation of `unset`.
//  *
//  * @private
//  * @param {Object} object The object to modify.
//  * @param {Array|string} path The property path to unset.
//  * @returns {boolean} Returns `true` if the property is deleted, else `false`.
//  */
// function baseUnset(object, path) {
//     path = castPath(path, object);
//     object = parent(object, path);
//     return object == null || delete object[toKey(last(path))];
// }

// export default baseUnset;
