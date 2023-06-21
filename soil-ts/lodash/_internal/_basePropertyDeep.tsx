import baseGet from "./_baseGet";

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path: PropertyPath): (object: any) => any {
    return (object: any) => baseGet(object, path);
}

export default basePropertyDeep;
// import baseGet from "./baseGet.js";

// /**
//  * A specialized version of `baseProperty` which supports deep paths.
//  *
//  * @private
//  * @param {Array|string} path The path of the property to get.
//  * @returns {Function} Returns the new accessor function.
//  */
// function basePropertyDeep(path) {
//     return object => baseGet(object, path);
// }

// export default basePropertyDeep;
