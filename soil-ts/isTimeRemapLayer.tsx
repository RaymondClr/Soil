import createIsAVLayer from "./_internal/_createIsAVLayer";

const isTimeRemapLayer = createIsAVLayer(layer => layer.timeRemapEnabled);

export default isTimeRemapLayer;
