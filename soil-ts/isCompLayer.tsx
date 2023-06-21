import createIsAVLayer from "./_internal/_createIsAVLayer";
import isCompItem from "./isCompItem";

const isCompLayer = createIsAVLayer(layer => isCompItem(layer.source));

export default isCompLayer;
