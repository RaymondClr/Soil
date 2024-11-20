/**
 * 无锁图层包装器。用于在不破坏图层锁定状态的情况下，修改图层属性。
 *
 * @template {Layer} T
 * @template U
 * @param {T} layer
 * @param {(layer: T) => U} callback
 * @returns {U}
 * @since 0.1.0
 * @category Soil
 * @example
 *
 * ```ts
 * const activeComp = _.getActiveComp();
 * if (activeComp) {
 *     _.eachLayers(activeComp, (layer) => (layer.locked = true));
 *     _.eachLayers(activeComp, function (layer) {
 *         _.unlockedLayer(layer, function (layer) {
 *             layer.startTime;
 *         });
 *     });
 * }
 * // 结果：合成中图层全部被锁定后，每个图层的开始时间被设置为 1 秒。
 * ```
 */
function unlockedLayer<T extends Layer, U>(layer: T, callback: (layer: T) => U): U {
    if (!layer.locked) {
        return callback(layer);
    }
    let result: U;
    layer.locked = false;
    result = callback(layer);
    layer.locked = true;
    return result;
}

export default unlockedLayer;
