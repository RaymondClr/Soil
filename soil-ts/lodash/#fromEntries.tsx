/**
 * The inverse of `entries`is method returns an object composed
 * from key-value `pairs`.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * fromEntries([['a', 1], ['b', 2]])
 * // => { 'a': 1, 'b': 2 }
 */
function fromEntries<T extends Array<readonly [PropertyName, unknown]>>(pairs: T): { [K in T[number] as K[0]]: K[1] } {
    const result: any = {};
    if (pairs == null) {
        return result;
    }
    for (const pair of pairs) {
        result[pair[0]] = pair[1];
    }
    return result;
}

export default fromEntries;
// /**
//  * The inverse of `entries`is method returns an object composed
//  * from key-value `pairs`.
//  *
//  * @since 4.0.0
//  * @category Array
//  * @param {Array} pairs The key-value pairs.
//  * @returns {Object} Returns the new object.
//  * @example
//  *
//  * fromEntries([['a', 1], ['b', 2]])
//  * // => { 'a': 1, 'b': 2 }
//  */
// function fromEntries(pairs) {
//     const result = {};
//     if (pairs == null) {
//         return result;
//     }
//     for (const pair of pairs) {
//         result[pair[0]] = pair[1];
//     }
//     return result;
// }

// export default fromEntries;
