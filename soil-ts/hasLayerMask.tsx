import baseGetLayerMaskProperty from "./_internal/_baseGetLayerMaskProperty";
import isRasterLayer from "./isRasterLayer";

/**
 * 图层存在遮罩谓词，不同于 hasLayerMaskStrict，它不判断 MaskMode。
 *
 * @param {*} layer
 * @returns {layer is RasterLayer}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode hasLayerMaskStrict}
 * @example
 *
 * ```ts
 * const selectedLayer = _.getFirstSelectedLayer();
 * if (_.hasLayerMask(selectedLayer)) {
 *     const maskProperty = selectedLayer.mask;
 *     _.eachPropertiesRight(maskProperty, function (property) {
 *         property.remove();
 *     });
 * }
 * // 结果：选中图层存在 Mask 的前提下，所有 Mask 都会被移除。
 * ```
 */
function hasLayerMask(layer: any): layer is RasterLayer {
    return isRasterLayer(layer) && baseGetLayerMaskProperty(layer).numProperties > 0;
}

export default hasLayerMask;
