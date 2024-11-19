import isAVLayer from "./isAVLayer";
import isShapeLayer from "./isShapeLayer";
import isTextLayer from "./isTextLayer";

/**
 * 光栅图层谓词。包含 AVLayer、ShapeLayer 和 TextLayer。
 * Ae 中，如果一个图层为光栅层，通常意味着它们可以被添加效果或绘制遮罩。
 *
 * @param {*} layer
 * @returns {layer is RasterLayer}
 * @since 0.1.0
 * @category Soil
 * @example
 *
 * ```ts
 * const selectedLayer = _.getFirstSelectedLayer();
 * if (_.isRasterLayer(selectedLayer)) {
 *     _.addProperty(selectedLayer, ["ADBE Effect Parade", "ADBE Fill"]);
 * }
 * // 结果：如果选中图层为光栅层，会被填充为红色。
 *
 * const selectedLayers = _.getSelectedLayers();
 * if (selectedLayers) {
 *     const rasterLayers = _.filter(selectedLayers, _.isRasterLayer);
 *     const maskGroups = _.map(rasterLayers, (layer) => layer.mask);
 *     _.each(maskGroups, function (maskGroup) {
 *         _.eachPropertiesRight(maskGroup, (property) => property.remove());
 *     });
 * }
 * // 结果：如果选中图层中存在光栅层，则图层上的所有 Mask 都会被移除。
 * ```
 */
function isRasterLayer(layer: any): layer is RasterLayer {
    return isAVLayer(layer) || isShapeLayer(layer) || isTextLayer(layer);
}

export default isRasterLayer;
