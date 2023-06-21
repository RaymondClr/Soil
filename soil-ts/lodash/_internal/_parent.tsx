import baseGet from "./_baseGet";
import castPath from "./_castPath";
import slice from "../#slice";

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object: any, path: PropertyPath): any {
    let partial = castPath(path, object);
    return partial.length < 2 ? object : baseGet(object, slice(partial, 0, -1));
}

export default parent;
// import baseGet from "./baseGet.js";
// import slice from "../slice.js";

// /**
//  * Gets the parent value at `path` of `object`.
//  *
//  * @private
//  * @param {Object} object The object to query.
//  * @param {Array} path The path to get the parent value of.
//  * @returns {*} Returns the parent value.
//  */
// function parent(object, path) {
//     return path.length < 2 ? object : baseGet(object, slice(path, 0, -1));
// }

// export default parent;
