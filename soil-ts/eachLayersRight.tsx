import collectionEachRight from "./_internal/_collectionEachRight";

function eachLayersRight<T extends CompItem>(compItem: T, iteratee: (layer: Layer, index: number, compItem: T) => boolean | void) {
    collectionEachRight(compItem.layers, (value, index) => {
        if (iteratee(value, index, compItem) === false) {
            return false;
        }
    });
}

export default eachLayersRight;
