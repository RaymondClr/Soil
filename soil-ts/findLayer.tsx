function findLayer(comp: CompItem, iteratee: CollectionIterator<Layer, CompItem, Layer | undefined>) {
    let index = 0;
    const length = comp.numLayers + 1;
    const layers = comp.layers;

    while (++index < length) {
        let layer = layers[index];
        if (iteratee(layer, index, comp)) {
            return layer;
        }
    }
}

export default findLayer;
