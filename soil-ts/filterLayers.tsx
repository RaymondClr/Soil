import collectionEach from "./_internal/_collectionEach";

/**
 * 通过谓词过滤图层
 *
 * @template {CompItem} T
 * @template {Layer} S
 * @param {T} compItem
 * @param {(layer: Layer, index: number, compItem: T) => layer is S} predicate
 * @returns {Array<S>}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
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
