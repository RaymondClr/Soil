import baseGetLayerMaskProperty from "./_internal/_baseGetLayerMaskProperty";
import isRasterLayer from "./isRasterLayer";

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
