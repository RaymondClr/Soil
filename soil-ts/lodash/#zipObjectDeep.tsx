import baseSet from "./_internal/_baseSet";
import baseZipObject from "./_internal/_baseZipObject";

/**
 * This method is like `zipObject` except that it supports property paths.
 *
 * @since 4.1.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @see unzip, unzipWith, zip, zipObject, zipWith
 * @example
 *
 * zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])
 * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
 */
function zipObjectDeep<T>(props: Array<string>, values: Array<T>): Dictionary<T> {
    return baseZipObject(props || [], values || [], baseSet);
}

export default zipObjectDeep;
// import baseSet from "./_internal/baseSet.js";
// import baseZipObject from "./_internal/baseZipObject.js";

// /**
//  * This method is like `zipObject` except that it supports property paths.
//  *
//  * @since 4.1.0
//  * @category Array
//  * @param {Array} [props=[]] The property identifiers.
//  * @param {Array} [values=[]] The property values.
//  * @returns {Object} Returns the new object.
//  * @see unzip, unzipWith, zip, zipObject, zipWith
//  * @example
//  *
//  * zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])
//  * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
//  */
// function zipObjectDeep(props, values) {
//     return baseZipObject(props || [], values || [], baseSet);
// }

// export default zipObjectDeep;
