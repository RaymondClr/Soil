import baseGetLayerMaskProperty from "./_internal/_baseGetLayerMaskProperty";
import isRasterLayer from "./isRasterLayer";

/**
 * 图层存在遮罩谓词，不同于 hasLayerMask，它同时判断 MaskMode。
 *
 * @param {Layer} layer
 * @returns {layer is RasterLayer}
 * @since 0.1.0
 * @category Soil
 * @see hasLayerMask
 * @example
 * foo(param)
 * // => result
 */
function hasLayerMaskStrict(layer: Layer): layer is RasterLayer {
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
