import isIterateeCall from "./_isIterateeCall";

/**
 * Creates a function like `assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner<T extends object>(assigner: (object: T, source: any, index: number, customizer: any) => void): (object: T, ...sources: Array<any>) => T {
    return (object: T, ...sources: Array<any>) => {
        let index = -1;
        let length = sources.length;
        let customizer = length > 1 ? sources[length - 1] : undefined;
        const guard = length > 2 ? sources[2] : undefined;

        customizer = assigner.length > 3 && typeof customizer === "function" ? (length--, customizer) : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
        }
        object = Object(object);
        while (++index < length) {
            const source = sources[index];
            if (source) {
                assigner(object, source, index, customizer);
            }
        }
        return object;
    };
}

export default createAssigner;
// import isIterateeCall from "./isIterateeCall.js";

// /**
//  * Creates a function like `assign`.
//  *
//  * @private
//  * @param {Function} assigner The function to assign values.
//  * @returns {Function} Returns the new assigner function.
//  */
// function createAssigner(assigner) {
//     return (object, ...sources) => {
//         let index = -1;
//         let length = sources.length;
//         let customizer = length > 1 ? sources[length - 1] : undefined;
//         const guard = length > 2 ? sources[2] : undefined;

//         customizer = assigner.length > 3 && typeof customizer === "function" ? (length--, customizer) : undefined;

//         if (guard && isIterateeCall(sources[0], sources[1], guard)) {
//             customizer = length < 3 ? undefined : customizer;
//             length = 1;
//         }
//         object = Object(object);
//         while (++index < length) {
//             const source = sources[index];
//             if (source) {
//                 assigner(object, source, index, customizer);
//             }
//         }
//         return object;
//     };
// }

// export default createAssigner;
