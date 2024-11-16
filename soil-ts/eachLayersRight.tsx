import collectionEachRight from "./_internal/_collectionEachRight";

/**
 * 反向迭代合成中的所有图层
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
function eachLayersRight<T extends CompItem>(compItem: T, iteratee: (layer: Layer, index: number, compItem: T) => boolean | void): boolean | void {
    collectionEachRight(compItem.layers, (value, index) => {
        if (iteratee(value, index, compItem) === false) {
            return false;
        }
    });
}

export default eachLayersRight;
