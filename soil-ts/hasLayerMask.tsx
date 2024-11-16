import baseGetLayerMaskProperty from "./_internal/_baseGetLayerMaskProperty";
import isRasterLayer from "./isRasterLayer";

/**
 * 图层存在遮罩谓词，不同于 hasLayerMaskStrict，它不判断 MaskMode。
 *
 * @param {Layer} layer
 * @returns {layer is RasterLayer}
 * @since 0.1.0
 * @category Soil
 * @see hasLayerMaskStrict
 * @example 
 * foo(param)
 * // => result
 */
function hasLayerMask(layer: Layer): layer is RasterLayer {
    return isRasterLayer(layer) && baseGetLayerMaskProperty(layer).numProperties > 0;
}

export default hasLayerMask;
