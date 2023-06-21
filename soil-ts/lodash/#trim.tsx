import castSlice from "./_internal/_castSlice";
import charsEndIndex from "./_internal/_charsEndIndex";
import charsStartIndex from "./_internal/_charsStartIndex";
import stringToArray from "./_internal/_stringToArray";
import trimString from "./_internal/_trimString";

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 * @see trimEnd, trimStart
 * @example
 *
 * trim('  abc  ')
 * // => 'abc'
 *
 * trim('-_-abc-_-', '_-')
 * // => 'abc'
 */
function trim(string: string, chars: string): string {
    if (string && chars === undefined) {
        return trimString(string);
    }
    if (!string || !chars) {
        return string || "";
    }
    const strSymbols = stringToArray(string);
    const chrSymbols = stringToArray(chars);
    const start = charsStartIndex(strSymbols, chrSymbols);
    const end = charsEndIndex(strSymbols, chrSymbols) + 1;
    return castSlice(strSymbols, start, end).join("");
}

export default trim;
// import castSlice from "./_internal/castSlice.js";
// import charsEndIndex from "./_internal/charsEndIndex.js";
// import charsStartIndex from "./_internal/charsStartIndex.js";
// import stringToArray from "./_internal/stringToArray.js";

// /**
//  * Removes leading and trailing whitespace or specified characters from `string`.
//  *
//  * @since 3.0.0
//  * @category String
//  * @param {string} [string=''] The string to trim.
//  * @param {string} [chars=whitespace] The characters to trim.
//  * @returns {string} Returns the trimmed string.
//  * @see trimEnd, trimStart
//  * @example
//  *
//  * trim('  abc  ')
//  * // => 'abc'
//  *
//  * trim('-_-abc-_-', '_-')
//  * // => 'abc'
//  */
// function trim(string, chars) {
//     if (string && chars === undefined) {
//         return string.trim();
//     }
//     if (!string || !chars) {
//         return string || "";
//     }
//     const strSymbols = stringToArray(string);
//     const chrSymbols = stringToArray(chars);
//     const start = charsStartIndex(strSymbols, chrSymbols);
//     const end = charsEndIndex(strSymbols, chrSymbols) + 1;

//     return castSlice(strSymbols, start, end).join("");
// }

// export default trim;
