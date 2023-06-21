import isLayer from "./isLayer";

function isNullLayer(value: any): value is Layer {
    return isLayer(value) && value.nullLayer;
}

export default isNullLayer;
