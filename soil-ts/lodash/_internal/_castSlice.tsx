import slice from "../#slice";

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice<T>(array: Array<T>, start: number, end?: number): Array<T> {
    const length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : slice(array, start, end);
}

export default castSlice;
// import slice from "../slice.js";

// /**
//  * Casts `array` to a slice if it's needed.
//  *
//  * @private
//  * @param {Array} array The array to inspect.
//  * @param {number} start The start position.
//  * @param {number} [end=array.length] The end position.
//  * @returns {Array} Returns the cast slice.
//  */
// function castSlice(array, start, end) {
//     const { length } = array;
//     end = end === undefined ? length : end;
//     return !start && end >= length ? array : slice(array, start, end);
// }

// export default castSlice;
