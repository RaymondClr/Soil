import isArray from "../basic/isArray";
import isKey from "./_isKey";
import stringToPath from "./_stringToPath";

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value: any, object: object): Array<any> {
    if (isArray(value)) {
        return value;
    }
    return isKey(value, object) ? [value] : stringToPath(value);
}

export default castPath;
// import isKey from "./isKey.js";
// import stringToPath from "./stringToPath.js";

// /**
//  * Casts `value` to a path array if it's not one.
//  *
//  * @private
//  * @param {*} value The value to inspect.
//  * @param {Object} [object] The object to query keys on.
//  * @returns {Array} Returns the cast property path array.
//  */
// function castPath(value, object) {
//     if (Array.isArray(value)) {
//         return value;
//     }
//     return isKey(value, object) ? [value] : stringToPath(value);
// }

// export default castPath;
