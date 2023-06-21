import baseToNumber from "./_baseToNumber";

/**
 * Creates a function that performs a mathematical operation on two values.
 *
 * @private
 * @param {Function} operator The function to perform the operation.
 * @param {number} [defaultValue] The value used for `undefined` arguments.
 * @returns {Function} Returns the new mathematical operation function.
 */
function createMathOperation(operator: (value: number, other: number) => number, defaultValue: number): (value?: number, other?: number) => number {
    return (value?: number, other?: number) => {
        if (value === undefined && other === undefined) {
            return defaultValue;
        }
        if (value !== undefined && other === undefined) {
            return value;
        }
        if (other !== undefined && value === undefined) {
            return other;
        }
        value = baseToNumber(value);
        other = baseToNumber(other);
        return operator(value, other);
    };
}

export default createMathOperation;
// import baseToNumber from "./baseToNumber.js";
// import baseToString from "./baseToString.js";

// /**
//  * Creates a function that performs a mathematical operation on two values.
//  *
//  * @private
//  * @param {Function} operator The function to perform the operation.
//  * @param {number} [defaultValue] The value used for `undefined` arguments.
//  * @returns {Function} Returns the new mathematical operation function.
//  */
// function createMathOperation(operator, defaultValue) {
//     return (value, other) => {
//         if (value === undefined && other === undefined) {
//             return defaultValue;
//         }
//         if (value !== undefined && other === undefined) {
//             return value;
//         }
//         if (other !== undefined && value === undefined) {
//             return other;
//         }
//         if (typeof value === "string" || typeof other === "string") {
//             value = baseToString(value);
//             other = baseToString(other);
//         } else {
//             value = baseToNumber(value);
//             other = baseToNumber(other);
//         }
//         return operator(value, other);
//     };
// }

// export default createMathOperation;
