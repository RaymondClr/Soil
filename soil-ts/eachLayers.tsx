import collectionEach from "./_internal/_collectionEach";

function eachLayers<T extends CompItem>(compItem: T, iteratee: (layer: Layer, index: number, compItem: T) => boolean | void) {
    collectionEach(compItem.layers, (value, index) => {
        if (iteratee(value, index, compItem) === false) {
            return false;
        }
    });
}

export default eachLayers;
