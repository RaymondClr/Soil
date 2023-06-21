import createIsAVLayer from "./_internal/_createIsAVLayer";
import isPlaceholderItem from "./isPlaceholderItem";

const isPlaceholderLayer = createIsAVLayer(layer => isPlaceholderItem(layer.source));

export default isPlaceholderLayer;
