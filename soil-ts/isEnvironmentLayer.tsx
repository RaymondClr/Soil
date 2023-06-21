import createIsAVLayer from "./_internal/_createIsAVLayer";

const isEnvironmentLayer = createIsAVLayer(layer => layer.environmentLayer);

export default isEnvironmentLayer;
