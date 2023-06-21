import isArray from "../basic/isArray";
import isArguments from "../#isArguments";

/** Built-in value reference. */
// const spreadableSymbol = Symbol.isConcatSpreadable;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value: any): value is Array<any> {
    return isArray(value) || isArguments(value);
}

export default isFlattenable;
// import isArguments from "../isArguments.js";

// /** Built-in value reference. */
// const spreadableSymbol = Symbol.isConcatSpreadable;

// /**
//  * Checks if `value` is a flattenable `arguments` object or array.
//  *
//  * @private
//  * @param {*} value The value to check.
//  * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
//  */
// function isFlattenable(value) {
//     return Array.isArray(value) || isArguments(value) || !!(value && value[spreadableSymbol]);
// }

// export default isFlattenable;
