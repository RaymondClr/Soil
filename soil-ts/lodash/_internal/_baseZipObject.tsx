/**
 * This base implementation of `zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */
function baseZipObject<T extends Array<PropertyName>, S extends Array<any>, U extends number = BuildIndexUnion<T["length"]>>(props: T, values: S, assignFunc: (object: Dictionary<any>, key: PropertyName, value: S[number]) => void): { [P in U as T[P]]: S[P] } {
    let index = -1;
    const length = props.length;
    const valsLength = values.length;
    const result: any = {};

    while (++index < length) {
        const value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
    }
    return result;
}

export default baseZipObject;
// /**
//  * This base implementation of `zipObject` which assigns values using `assignFunc`.
//  *
//  * @private
//  * @param {Array} props The property identifiers.
//  * @param {Array} values The property values.
//  * @param {Function} assignFunc The function to assign values.
//  * @returns {Object} Returns the new object.
//  */
// function baseZipObject(props, values, assignFunc) {
//     let index = -1;
//     const length = props.length;
//     const valsLength = values.length;
//     const result = {};

//     while (++index < length) {
//         const value = index < valsLength ? values[index] : undefined;
//         assignFunc(result, props[index], value);
//     }
//     return result;
// }

// export default baseZipObject;
