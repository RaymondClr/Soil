import isAVLayer from "./isAVLayer";
import isSolidSource from "./isSolidSource";

function isSolidLayer(value: any): value is AVLayer {
    return isAVLayer(value) && isSolidSource(value.source.mainSource);
}

export default isSolidLayer;
