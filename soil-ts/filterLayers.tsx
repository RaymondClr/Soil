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
 * @see {@linkcode findLayer}
 * @example
 *
 * ```ts
 * const activeComp = _.getActiveComp();
 * if (_.isCompItem(activeComp)) {
 *     const shapeLayers = _.filterLayers(activeComp, _.isShapeLayer);
 *     // 注意：找不到会返回 undefined。
 *     _.log(_.map(shapeLayers, (layer) => layer.name));
 * }
 * // 结果：桌面日志会记录当前活动合成中所有形状图层的名称。
 * ```
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
