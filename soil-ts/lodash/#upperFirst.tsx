import createCaseFirst from "./_internal/_createCaseFirst";

/**
 * Converts the first character of `string` to upper case.
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase
 * @example
 *
 * upperFirst('fred')
 * // => 'Fred'
 *
 * upperFirst('FRED')
 * // => 'FRED'
 */
const upperFirst = createCaseFirst("toUpperCase");

export default upperFirst;
// import createCaseFirst from "./_internal/createCaseFirst.js";

// /**
//  * Converts the first character of `string` to upper case.
//  *
//  * @since 4.0.0
//  * @category String
//  * @param {string} [string=''] The string to convert.
//  * @returns {string} Returns the converted string.
//  * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase
//  * @example
//  *
//  * upperFirst('fred')
//  * // => 'Fred'
//  *
//  * upperFirst('FRED')
//  * // => 'FRED'
//  */
// const upperFirst = createCaseFirst("toUpperCase");

// export default upperFirst;
