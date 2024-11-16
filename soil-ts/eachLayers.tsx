import collectionEach from "./_internal/_collectionEach";

/**
 * 迭代合成中的所有图层
 *
 * @template {CompItem} T
 * @param {T} compItem
 * @param {(layer: Layer, index: number, compItem: T) => boolean | void} iteratee
 * @returns {(boolean | void) => void)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function eachLayers<T extends CompItem>(compItem: T, iteratee: (layer: Layer, index: number, compItem: T) => boolean | void): (boolean | void) {
    collectionEach(compItem.layers, (value, index) => {
        if (iteratee(value, index, compItem) === false) {
            return false;
        }
    });
}

export default eachLayers;
