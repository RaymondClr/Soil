import createIsAVLayer from "./_internal/_createIsAVLayer";
import isFootageItem from "./isFootageItem";

const isFootageLayer = createIsAVLayer(layer => isFootageItem(layer.source));

export default isFootageLayer;
