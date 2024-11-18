import collectionEach from "./_internal/_collectionEach";

/**
 * 迭代合成中的所有图层
 *
 * @template {CompItem} T
 * @param {T} compItem
 * @param {(layer: Layer, index: number, compItem: T) => boolean | void} iteratee
 * @returns {T}
 * @since 0.1.0
 * @category Soil
 * @see eachLayersRight
 * @example
 *
 * ```ts
 * const activeComp = _.getActiveComp();
 * if (_.isCompItem(activeComp)) {
 *     _.eachLayers(activeComp, function (layer, index) {
 *         _.log(`${index + 1} ${layer.name}`);
 *     });
 * }
 * // 结果：桌面日志会记录活动合成中的所有图层名称。
 * ```
 */
function eachLayers<T extends CompItem>(compItem: T, iteratee: (layer: Layer, index: number, compItem: T) => boolean | void): T {
    collectionEach(compItem.layers, (value, index) => {
        if (iteratee(value, index, compItem) === false) {
            return false;
        }
    });
    return compItem;
}

export default eachLayers;
