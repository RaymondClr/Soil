import castSlice from "./_internal/_castSlice";
import charsEndIndex from "./_internal/_charsEndIndex";
import stringToArray from "./_internal/_stringToArray";

/**
 * Removes trailing whitespace or specified characters from `string`.
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 * @see trim, trimStart
 * @example
 *
 * trimEnd('  abc  ')
 * // => '  abc'
 *
 * trimEnd('-_-abc-_-', '_-')
 * // => '-_-abc'
 */
function trimEnd(string: string, chars: string): string {
    if (string && chars === undefined) {
        return string.replace(/\s+$/, "");
    }
    if (!string || !chars) {
        return string || "";
    }
    const strSymbols = stringToArray(string);
    const end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
    return castSlice(strSymbols, 0, end).join("");
}

export default trimEnd;
// import castSlice from "./_internal/castSlice.js";
// import charsEndIndex from "./_internal/charsEndIndex.js";
// import stringToArray from "./_internal/stringToArray.js";

// const methodName = "".trimRight ? "trimRight" : "trimEnd";

// /**
//  * Removes trailing whitespace or specified characters from `string`.
//  *
//  * @since 4.0.0
//  * @category String
//  * @param {string} [string=''] The string to trim.
//  * @param {string} [chars=whitespace] The characters to trim.
//  * @returns {string} Returns the trimmed string.
//  * @see trim, trimStart
//  * @example
//  *
//  * trimEnd('  abc  ')
//  * // => '  abc'
//  *
//  * trimEnd('-_-abc-_-', '_-')
//  * // => '-_-abc'
//  */
// function trimEnd(string, chars) {
//     if (string && chars === undefined) {
//         return string[methodName]();
//     }
//     if (!string || !chars) {
//         return string || "";
//     }
//     const strSymbols = stringToArray(string);
//     const end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
//     return castSlice(strSymbols, 0, end).join("");
// }

// export default trimEnd;
