import castPath from "./_internal/_castPath";
import parent from "./_internal/_parent";
import toKey from "./_internal/_toKey";
import last from "./#last";

/**
 * Invokes the method at `path` of `object`.
 *
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} [args] The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] }
 *
 * invoke(object, 'a[0].b.c.slice', [1, 3])
 * // => [2, 3]
 */
function invoke(object: any, path: PropertyPath, args: any): any {
    let partial = castPath(path, object);
    object = parent(object, partial);
    const func = object == null ? object : object[toKey(last(partial))];
    return func == null ? undefined : func.apply(object, args);
}

export default invoke;
// import castPath from "./_internal/castPath.js";
// import last from "./last.js";
// import parent from "./_internal/parent.js";
// import toKey from "./_internal/toKey.js";

// /**
//  * Invokes the method at `path` of `object`.
//  *
//  * @since 4.0.0
//  * @category Object
//  * @param {Object} object The object to query.
//  * @param {Array|string} path The path of the method to invoke.
//  * @param {Array} [args] The arguments to invoke the method with.
//  * @returns {*} Returns the result of the invoked method.
//  * @example
//  *
//  * const object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] }
//  *
//  * invoke(object, 'a[0].b.c.slice', [1, 3])
//  * // => [2, 3]
//  */
// function invoke(object, path, args) {
//     path = castPath(path, object);
//     object = parent(object, path);
//     const func = object == null ? object : object[toKey(last(path))];
//     return func == null ? undefined : func.apply(object, args);
// }

// export default invoke;
