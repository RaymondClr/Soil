/**
 * 通过谓词查找图层
 *
 * @param {CompItem} comp
 * @param {CollectionIterator<Layer, CompItem, boolean>} iteratee
 * @returns {(Layer | undefined)}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode findItem}
 * @example
 *
 * ```ts
 * const activeComp = _.getActiveComp();
 * if (_.isCompItem(activeComp)) {
 *     const shapeLayer = _.findLayer(activeComp, _.isShapeLayer);
 *     // 注意：找不到会返回 undefined。
 *     if (shapeLayer) {
 *         alert(shapeLayer.name);
 *     }
 * }
 * // 结果：如果活动合成中存在形状层，那么弹窗会显示从上往下第一个形状图层的名称。
 * ```
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
