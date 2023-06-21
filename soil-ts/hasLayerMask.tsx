import baseGetLayerMaskProperty from "./_internal/_baseGetLayerMaskProperty";
import isRasterLayer from "./isRasterLayer";

function hasLayerMask(layer: Layer): layer is RasterLayer {
    return isRasterLayer(layer) && baseGetLayerMaskProperty(layer).numProperties > 0;
}

export default hasLayerMask;
