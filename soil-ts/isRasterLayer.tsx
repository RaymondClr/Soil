import isAVLayer from "./isAVLayer";
import isShapeLayer from "./isShapeLayer";
import isTextLayer from "./isTextLayer";

/**
 * 光栅图层谓词。包含 AVLayer、ShapeLayer 和 TextLayer。
 * Ae 中，如果一个图层为光栅层，通常意味着它们可以添加效果。
 *
 * @param {*} layer
 * @returns {layer is RasterLayer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 *
 * ```ts
 * const selectedLayer = _.getFirstSelectedLayer();
 * 
 * if (_.isRasterLayer(selectedLayer)) {
 *     _.addProperty(selectedLayer, ["ADBE Effect Parade", "ADBE Fill"]);
 * }
 * // 结果：如果选中图层为光栅层，会被填充为红色。
 * ```
 */
function isRasterLayer(layer: any): layer is RasterLayer {
    return isAVLayer(layer) || isShapeLayer(layer) || isTextLayer(layer);
}

export default isRasterLayer;
