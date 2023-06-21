import identity from "../basic/identity";
import isArray from "../basic/isArray";
import baseEach from "./_baseEach";
import baseGet from "./_baseGet";
import baseSortBy from "./_baseSortBy";
import compareMultiple from "./_compareMultiple";
import isArrayLike from "../#isArrayLike";
import map from "../#map";

// const identity = value => value;

/**
 * The base implementation of `orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} array The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy<T>(array: Array<T>, iteratees: Array<(value: T) => any>, orders: Array<string | AnyFunction>): Array<any> {
    if (iteratees.length) {
        iteratees = map(iteratees, iteratee => {
            if (isArray(iteratee)) {
                return (value: any) => baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            }

            return iteratee;
        });
    } else {
        iteratees = [identity];
    }

    let criteriaIndex = -1;
    let eachIndex = -1;

    const result = isArrayLike(array) ? new Array(array.length) : [];

    baseEach(array, (value: any) => {
        const criteria = map(iteratees, iteratee => iteratee(value));

        result[++eachIndex] = {
            criteria: criteria,
            index: ++criteriaIndex,
            value: value,
        };
    });

    return baseSortBy(result, (object, other) => compareMultiple(object, other, orders));
}

export default baseOrderBy;
// import baseEach from "./baseEach.js";
// import baseSortBy from "./baseSortBy.js";
// import baseGet from "./baseGet.js";
// import compareMultiple from "./compareMultiple.js";
// import isArrayLike from "../isArrayLike.js";

// const identity = value => value;

// /**
//  * The base implementation of `orderBy` without param guards.
//  *
//  * @private
//  * @param {Array|Object} collection The collection to iterate over.
//  * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
//  * @param {string[]} orders The sort orders of `iteratees`.
//  * @returns {Array} Returns the new sorted array.
//  */
// function baseOrderBy(collection, iteratees, orders) {
//     if (iteratees.length) {
//         iteratees = iteratees.map(iteratee => {
//             if (Array.isArray(iteratee)) {
//                 return value => baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
//             }

//             return iteratee;
//         });
//     } else {
//         iteratees = [identity];
//     }

//     let criteriaIndex = -1;
//     let eachIndex = -1;

//     const result = isArrayLike(collection) ? new Array(collection.length) : [];

//     baseEach(collection, value => {
//         const criteria = iteratees.map(iteratee => iteratee(value));

//         result[++eachIndex] = {
//             criteria,
//             index: ++criteriaIndex,
//             value,
//         };
//     });

//     return baseSortBy(result, (object, other) => compareMultiple(object, other, orders));
// }

// export default baseOrderBy;
