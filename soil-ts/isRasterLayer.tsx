import isAVLayer from "./isAVLayer";
import isShapeLayer from "./isShapeLayer";
import isTextLayer from "./isTextLayer";

function isRasterLayer(layer: Layer): layer is RasterLayer {
    return isAVLayer(layer) || isShapeLayer(layer) || isTextLayer(layer);
}

export default isRasterLayer;
