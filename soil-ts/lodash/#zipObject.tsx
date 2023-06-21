import assignValue from "./_internal/_assignValue";
import baseZipObject from "./_internal/_baseZipObject";

/**
 * This method is like `fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @see unzip, unzipWith, zip, zipObjectDeep, zipWith
 * @example
 *
 * zipObject(['a', 'b'], [1, 2])
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject<T extends Array<PropertyName>, K extends Array<any>, U extends number = BuildIndexUnion<T["length"]>>(props: T, values: K): { [P in U as T[P]]: K[P] } {
    return baseZipObject(props || [], values || [], assignValue);
}

export default zipObject;
// import assignValue from "./_internal/assignValue.js";
// import baseZipObject from "./_internal/baseZipObject.js";

// /**
//  * This method is like `fromPairs` except that it accepts two arrays,
//  * one of property identifiers and one of corresponding values.
//  *
//  * @since 0.4.0
//  * @category Array
//  * @param {Array} [props=[]] The property identifiers.
//  * @param {Array} [values=[]] The property values.
//  * @returns {Object} Returns the new object.
//  * @see unzip, unzipWith, zip, zipObjectDeep, zipWith
//  * @example
//  *
//  * zipObject(['a', 'b'], [1, 2])
//  * // => { 'a': 1, 'b': 2 }
//  */
// function zipObject(props, values) {
//     return baseZipObject(props || [], values || [], assignValue);
// }

// export default zipObject;
