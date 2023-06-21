import isArray from "../basic/isArray";
import equalArrays from "./_equalArrays";
import equalByTag from "./_equalByTag";
import equalObjects from "./_equalObjects";
import getTag from "./_getTag";

/** Used to compose bitmasks for value comparisons. */
// const COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
const argsTag = "[object Arguments]";
const arrayTag = "[object Array]";
const objectTag = "[object Object]";

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object: any, other: any, equalFunc: any, customizer?: any, isLoose?: boolean, stackA?: Array<any>, stackB?: Array<any>): boolean {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = arrayTag,
        othTag = arrayTag;

    if (!objIsArr) {
        objTag = getTag(object);
        if (objTag == argsTag) {
            objTag = objectTag;
        }
    }
    if (!othIsArr) {
        othTag = getTag(other);
        if (othTag == argsTag) {
            othTag = objectTag;
        }
    }
    var objIsObj = objTag == objectTag,
        othIsObj = othTag == objectTag,
        isSameTag = objTag == othTag;

    if (isSameTag && !(objIsArr || objIsObj)) {
        return equalByTag(object, other, objTag);
    }
    if (!isLoose) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");

        if (objIsWrapped || othIsWrapped) {
            return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
        }
    }
    if (!isSameTag) {
        return false;
    }
    // Assume cyclic values are equal.
    // For more information on detecting circular references see https://es5.github.io/#JO.
    stackA || (stackA = []);
    stackB || (stackB = []);

    var length = stackA.length;
    while (length--) {
        if (stackA[length] == object) {
            return stackB[length] == other;
        }
    }
    // Add `object` and `other` to the stack of traversed objects.
    stackA.push(object);
    stackB.push(other);

    var result: boolean;

    if (objIsArr) {
        result = equalArrays(object, other, equalFunc, customizer, isLoose, stackA, stackB);
    } else {
        result = equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB);
    }
    stackA.pop();
    stackB.pop();

    return result;
}

export default baseIsEqualDeep;
// import Stack from "./Stack.js";
// import equalArrays from "./equalArrays.js";
// import equalByTag from "./equalByTag.js";
// import equalObjects from "./equalObjects.js";
// import getTag from "./getTag.js";
// import isBuffer from "../isBuffer.js";
// import isTypedArray from "../isTypedArray.js";

// /** Used to compose bitmasks for value comparisons. */
// const COMPARE_PARTIAL_FLAG = 1;

// /** `Object#toString` result references. */
// const argsTag = "[object Arguments]";
// const arrayTag = "[object Array]";
// const objectTag = "[object Object]";

// /** Used to check objects for own properties. */
// const hasOwnProperty = Object.prototype.hasOwnProperty;

// /**
//  * A specialized version of `baseIsEqual` for arrays and objects which performs
//  * deep comparisons and tracks traversed objects enabling objects with circular
//  * references to be compared.
//  *
//  * @private
//  * @param {Object} object The object to compare.
//  * @param {Object} other The other object to compare.
//  * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
//  * @param {Function} customizer The function to customize comparisons.
//  * @param {Function} equalFunc The function to determine equivalents of values.
//  * @param {Object} [stack] Tracks traversed `object` and `other` objects.
//  * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
//  */
// function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
//     let objIsArr = Array.isArray(object);
//     const othIsArr = Array.isArray(other);
//     let objTag = objIsArr ? arrayTag : getTag(object);
//     let othTag = othIsArr ? arrayTag : getTag(other);

//     objTag = objTag == argsTag ? objectTag : objTag;
//     othTag = othTag == argsTag ? objectTag : othTag;

//     let objIsObj = objTag == objectTag;
//     const othIsObj = othTag == objectTag;
//     const isSameTag = objTag == othTag;

//     if (isSameTag && isBuffer(object)) {
//         if (!isBuffer(other)) {
//             return false;
//         }
//         objIsArr = true;
//         objIsObj = false;
//     }
//     if (isSameTag && !objIsObj) {
//         stack || (stack = new Stack());
//         return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
//     }
//     if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
//         const objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__");
//         const othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");

//         if (objIsWrapped || othIsWrapped) {
//             const objUnwrapped = objIsWrapped ? object.value() : object;
//             const othUnwrapped = othIsWrapped ? other.value() : other;

//             stack || (stack = new Stack());
//             return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
//         }
//     }
//     if (!isSameTag) {
//         return false;
//     }
//     stack || (stack = new Stack());
//     return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
// }

// export default baseIsEqualDeep;
