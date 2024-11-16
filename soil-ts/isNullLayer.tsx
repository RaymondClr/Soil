import isLayer from "./isLayer";

/**
 * 空对象图层谓词
 *
 * @param {*} value
 * @returns {value is Layer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isNullLayer(value: any): value is Layer {
    return isLayer(value) && value.nullLayer;
}

export default isNullLayer;
