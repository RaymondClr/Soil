import asciiToArray from "./_asciiToArray";
import hasUnicode from "./_hasUnicode";
import unicodeToArray from "./_unicodeToArray";

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string: string): Array<string> {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}

export default stringToArray;
// import asciiToArray from "./asciiToArray.js";
// import hasUnicode from "./hasUnicode.js";
// import unicodeToArray from "./unicodeToArray.js";

// /**
//  * Converts `string` to an array.
//  *
//  * @private
//  * @param {string} string The string to convert.
//  * @returns {Array} Returns the converted array.
//  */
// function stringToArray(string) {
//     return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
// }

// export default stringToArray;
