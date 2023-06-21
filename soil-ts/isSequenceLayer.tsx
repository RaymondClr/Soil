import createIsAVLayer from "./_internal/_createIsAVLayer";
import isSequenceItem from "./isSequenceItem";

const isSequenceLayer = createIsAVLayer(layer => isSequenceItem(layer.source));

export default isSequenceLayer;
