import isAVLayer from "../isAVLayer";

function createIsAVLayer(callback: (layer: AVLayer) => boolean) {
    return (value: any): value is AVLayer => isAVLayer(value) && callback(value);
}

export default createIsAVLayer;
