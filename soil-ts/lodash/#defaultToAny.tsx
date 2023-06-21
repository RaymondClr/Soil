import { nativeSlice } from "./basic/_global";
import defaultTo from "./#defaultTo";
import reduce from "./#reduce";

/**
 * This method is like `defaultTo` except that it accepts multiple default values and returns the first one that is not
 * `NaN`, `null`, or `undefined`.
 *
 * @since 5.0.0
 * @category Util
 * @param {*} value The value to check.
 * @param {...*} defaultValues The default values.
 * @returns {*} Returns the resolved value.
 * @see _.defaultTo
 * @example
 *
 * defaultToAny(1, 10, 20)
 * // => 1
 *
 * defaultToAny(undefined, 10, 20)
 * // => 10
 *
 * defaultToAny(undefined, null, 20)
 * // => 20
 *
 * defaultToAny(undefined, null, NaN)
 * // => NaN
 */
function defaultToAny<T>(value: T, ...defaultValues: Array<T>): T {
    const values = nativeSlice.call(arguments, 1) as Array<T>;
    return reduce(values, defaultTo, value);
}

export default defaultToAny;
// import arrayReduce from "./_internal/arrayReduce.js";
// import defaultTo from "./defaultTo.js";

// /**
//  * This method is like `defaultTo` except that it accepts multiple default values and returns the first one that is not
//  * `NaN`, `null`, or `undefined`.
//  *
//  * @since 5.0.0
//  * @category Util
//  * @param {*} value The value to check.
//  * @param {...*} defaultValues The default values.
//  * @returns {*} Returns the resolved value.
//  * @see _.defaultTo
//  * @example
//  *
//  * defaultToAny(1, 10, 20)
//  * // => 1
//  *
//  * defaultToAny(undefined, 10, 20)
//  * // => 10
//  *
//  * defaultToAny(undefined, null, 20)
//  * // => 20
//  *
//  * defaultToAny(undefined, null, NaN)
//  * // => NaN
//  */
// function defaultToAny(value, ...defaultValues) {
//     return arrayReduce(defaultValues, defaultTo, value);
// }

// export default defaultToAny;
