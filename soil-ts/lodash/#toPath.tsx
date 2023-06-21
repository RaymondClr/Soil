import isArray from "./basic/isArray";
import copyArray from "./_internal/_copyArray";
import stringToPath from "./_internal/_stringToPath";
import toKey from "./_internal/_toKey";
import map from "./#map";

/**
 * Converts `value` to a property path array.
 *
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * toPath('a.b.c')
 * // => ['a', 'b', 'c']
 *
 * toPath('a[0].b.c')
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value: any): Array<string> {
    if (isArray(value)) {
        return map(value, toKey);
    }
    return copyArray(stringToPath(value));
}

export default toPath;
// import map from "./map.js";
// import copyArray from "./_internal/copyArray.js";
// import isSymbol from "./isSymbol.js";
// import stringToPath from "./_internal/stringToPath.js";
// import toKey from "./_internal/toKey.js";

// /**
//  * Converts `value` to a property path array.
//  *
//  * @since 4.0.0
//  * @category Util
//  * @param {*} value The value to convert.
//  * @returns {Array} Returns the new property path array.
//  * @example
//  *
//  * toPath('a.b.c')
//  * // => ['a', 'b', 'c']
//  *
//  * toPath('a[0].b.c')
//  * // => ['a', '0', 'b', 'c']
//  */
// function toPath(value) {
//     if (Array.isArray(value)) {
//         return map(value, toKey);
//     }
//     return isSymbol(value) ? [value] : copyArray(stringToPath(value));
// }

// export default toPath;
