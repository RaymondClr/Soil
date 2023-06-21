import baseIsEqualDeep from "./_baseIsEqualDeep";
import isObjectLike from "../#isObjectLike";

/**
 * The base implementation of `isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value: any, other: any, customizer?: any, isLoose?: boolean, stackA?: Array<any>, stackB?: Array<any>): boolean {
    if (value === other) {
        return true;
    }
    if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
}

export default baseIsEqual;
// import baseIsEqualDeep from "./baseIsEqualDeep.js";
// import isObjectLike from "../isObjectLike.js";

// /**
//  * The base implementation of `isEqual` which supports partial comparisons
//  * and tracks traversed objects.
//  *
//  * @private
//  * @param {*} value The value to compare.
//  * @param {*} other The other value to compare.
//  * @param {boolean} bitmask The bitmask flags.
//  *  1 - Unordered comparison
//  *  2 - Partial comparison
//  * @param {Function} [customizer] The function to customize comparisons.
//  * @param {Object} [stack] Tracks traversed `value` and `other` objects.
//  * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
//  */
// function baseIsEqual(value, other, bitmask, customizer, stack) {
//     if (value === other) {
//         return true;
//     }
//     if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
//         return value !== value && other !== other;
//     }
//     return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
// }

// export default baseIsEqual;
