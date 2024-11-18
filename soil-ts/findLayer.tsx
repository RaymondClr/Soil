/**
 * 通过谓词查找图层
 *
 * @param {CompItem} comp
 * @param {CollectionIterator<Layer, CompItem, boolean>} iteratee
 * @returns {(Layer | undefined)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function findLayer(comp: CompItem, iteratee: CollectionIterator<Layer, CompItem, boolean>): Layer | undefined {
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
