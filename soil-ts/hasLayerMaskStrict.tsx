import baseGetLayerMaskProperty from "./_internal/_baseGetLayerMaskProperty";
import isRasterLayer from "./isRasterLayer";

/**
 * 图层存在遮罩谓词，不同于 hasLayerMask，它同时判断 MaskMode。
 *
 * @param {*} layer
 * @returns {layer is RasterLayer}
 * @since 0.1.0
 * @category Soil
 * @see hasLayerMask
 * @example
 *
 * ```ts
 * const selectedLayer = _.getFirstSelectedLayer();
 * if (_.hasLayerMaskStrict(selectedLayer)) {
 *     let shapePoints: Shape["vertices"] = [];
 *     _.eachProperties(selectedLayer.mask, function (maskAtom: MaskPropertyGroup) {
 *         if (maskAtom.maskMode !== MaskMode.NONE) {
 *             shapePoints = shapePoints.concat(maskAtom.maskPath.value.vertices);
 *         }
 *     });
 *     const xPoints = _.map(shapePoints, (point) => point[0]);
 *     const yPoints = _.map(shapePoints, (point) => point[1]);
 *     const minX = Math.min.apply(null, xPoints);
 *     const minY = Math.min.apply(null, yPoints);
 *     const maxX = Math.max.apply(null, xPoints);
 *     const maxY = Math.max.apply(null, yPoints);
 *     const maskSourceRect = { top: minY, left: minX, width: maxX - minX, height: maxY - minY };
 *     _.logJson(maskSourceRect);
 * }
 * // 结果：选中图层存在 Mask 且 MaskMode 至少有一个不是 MaskMode.NONE 的前提下，桌面 Json 日志会记录所有 mask 组合后的 SoureRect。
 * ```
 */
function hasLayerMaskStrict(layer: any): layer is RasterLayer {
    if (!isRasterLayer(layer)) {
        return false;
    }
    const maskParade = baseGetLayerMaskProperty(layer);
    const numProperties = maskParade.numProperties;
    if (numProperties === 0) {
        return false;
    }

    let index = 0;
    const length = numProperties + 1;

    while (++index < length) {
        const property = maskParade.property(index) as MaskPropertyGroup;
        if (property.maskMode !== MaskMode.NONE) {
            return true;
        }
    }
    return false;
}

export default hasLayerMaskStrict;
