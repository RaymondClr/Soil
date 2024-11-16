import isAVLayer from "./isAVLayer";
import isSolidSource from "./isSolidSource";

/**
 * 纯色图层谓词
 *
 * @param {*} value
 * @returns {value is AVLayer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isSolidLayer(value: any): value is AVLayer {
    return isAVLayer(value) && isSolidSource(value.source.mainSource);
}

export default isSolidLayer;
