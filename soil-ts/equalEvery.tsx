import every from "./lodash/#every";

/**
 * 判断数组中的每个元素全部相等
 *
 * @param {Array<any>} array
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function equalEvery(array: Array<any>): boolean {
    if (array.length === 0) {
        return false;
    }
    const target = array[0];
    return every(array, function (element) {
        return element === target;
    });
}

export default equalEvery;
