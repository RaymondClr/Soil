/**
 * The base implementation of `property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key: PropertyName): (object: any) => any {
    return function (object: any): any {
        return object == null ? undefined : object[key];
    };
}

export default baseProperty;
// /**
//  * The base implementation of `property` without support for deep paths.
//  *
//  * @private
//  * @param {string} key The key of the property to get.
//  * @returns {Function} Returns the new accessor function.
//  */
// function baseProperty(key) {
//     return object => (object == null ? undefined : object[key]);
// }

// export default baseProperty;
