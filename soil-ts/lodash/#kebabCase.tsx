import reduce from "./#reduce";
import toString from "./#toString";
import words from "./#words";

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @see camelCase, lowerCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * kebabCase('Foo Bar')
 * // => 'foo-bar'
 *
 * kebabCase('fooBar')
 * // => 'foo-bar'
 *
 * kebabCase('__FOO_BAR__')
 * // => 'foo-bar'
 */
function kebabCase(string: string): string {
    return reduce(words(toString(string).replace(/['\u2019]/g, "")), (result, word, index) => result + (index ? "-" : "") + word.toLowerCase(), "");
}

export default kebabCase;
// import words from "./words.js";
// import toString from "./toString.js";

// /**
//  * Converts `string` to
//  * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
//  *
//  * @since 3.0.0
//  * @category String
//  * @param {string} [string=''] The string to convert.
//  * @returns {string} Returns the kebab cased string.
//  * @see camelCase, lowerCase, snakeCase, startCase, upperCase, upperFirst
//  * @example
//  *
//  * kebabCase('Foo Bar')
//  * // => 'foo-bar'
//  *
//  * kebabCase('fooBar')
//  * // => 'foo-bar'
//  *
//  * kebabCase('__FOO_BAR__')
//  * // => 'foo-bar'
//  */
// const kebabCase = string => words(toString(string).replace(/['\u2019]/g, "")).reduce((result, word, index) => result + (index ? "-" : "") + word.toLowerCase(), "");

// export default kebabCase;
