import isAVLayer from "./isAVLayer";
import isShapeLayer from "./isShapeLayer";
import isTextLayer from "./isTextLayer";

/**
 * 光栅图层谓词
 *
 * @param {*} layer
 * @returns {layer is RasterLayer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isRasterLayer(layer: any): layer is RasterLayer {
    return isAVLayer(layer) || isShapeLayer(layer) || isTextLayer(layer);
}

export default isRasterLayer;
