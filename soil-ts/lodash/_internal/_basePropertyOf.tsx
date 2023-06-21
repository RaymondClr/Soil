/**
 * The base implementation of `propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf<T>(object: Dictionary<T>): (key: string) => T | undefined {
    return function (key: string): T | undefined {
        return object == null ? undefined : object[key];
    };
}

export default basePropertyOf;
// /**
//  * The base implementation of `propertyOf` without support for deep paths.
//  *
//  * @private
//  * @param {Object} object The object to query.
//  * @returns {Function} Returns the new accessor function.
//  */
// function basePropertyOf(object) {
//     return key => (object == null ? undefined : object[key]);
// }

// export default basePropertyOf;
