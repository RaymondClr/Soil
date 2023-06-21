import { reAsciiWord, reHasUnicodeWord } from "./basic/_global";
import filter from "./#filter";
import unicodeWords from "./_internal/_unicodeWords";

function asciiWords(string: string): Array<string> | null {
    let matched = string.match(reAsciiWord);
    return matched ? filter(matched, (string): string is string => string !== "") : null;
}

/**
 * Splits `string` into an array of its words.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * words('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string: string, pattern?: RegExp | string): Array<string> {
    if (pattern === undefined) {
        const result = reHasUnicodeWord.test(string) ? unicodeWords(string) : asciiWords(string);
        return result || [];
    }
    return string.match(pattern) || [];
}

export default words;
// import unicodeWords from "./_internal/unicodeWords.js";

// const hasUnicodeWord = RegExp.prototype.test.bind(/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/);

// /** Used to match words composed of alphanumeric characters. */
// const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

// function asciiWords(string) {
//     return string.match(reAsciiWord);
// }

// /**
//  * Splits `string` into an array of its words.
//  *
//  * @since 3.0.0
//  * @category String
//  * @param {string} [string=''] The string to inspect.
//  * @param {RegExp|string} [pattern] The pattern to match words.
//  * @returns {Array} Returns the words of `string`.
//  * @example
//  *
//  * words('fred, barney, & pebbles')
//  * // => ['fred', 'barney', 'pebbles']
//  *
//  * words('fred, barney, & pebbles', /[^, ]+/g)
//  * // => ['fred', 'barney', '&', 'pebbles']
//  */
// function words(string, pattern) {
//     if (pattern === undefined) {
//         const result = hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
//         return result || [];
//     }
//     return string.match(pattern) || [];
// }

// export default words;
