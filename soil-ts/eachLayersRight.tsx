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
 * @see eachLayers
 * @example
 *
 * ```ts
 * const activeComp = _.getActiveComp();
 * 
 * if (_.isCompItem(activeComp)) {
 *     _.eachLayersRight(activeComp, function (layer) {
 *         layer.remove();
 *     });
 * }
 * // 结果：活动合成中的所有图层都会被删除。
 * ```
 */
function eachLayersRight<T extends CompItem>(compItem: T, iteratee: (layer: Layer, index: number, compItem: T) => boolean | void): boolean | void {
    collectionEachRight(compItem.layers, (value, index) => {
        if (iteratee(value, index, compItem) === false) {
            return false;
        }
    });
}

export default eachLayersRight;
