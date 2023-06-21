import createIsAVLayer from "./_internal/_createIsAVLayer";
import isImportedItem from "./isImportedItem";

const isImportedLayer = createIsAVLayer(layer => isImportedItem(layer.source));

export default isImportedLayer;
