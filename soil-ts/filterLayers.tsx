import collectionEach from "./_internal/_collectionEach";

function filterLayers<T extends CompItem, S extends Layer>(compItem: T, predicate: (layer: Layer, index: number, compItem: T) => layer is S): Array<S> {
    const result: Array<S> = [];
    collectionEach(compItem.layers, (layer, index) => {
        if (predicate(layer, index, compItem)) {
            result.push(layer);
        }
    });
    return result;
}

export default filterLayers;
