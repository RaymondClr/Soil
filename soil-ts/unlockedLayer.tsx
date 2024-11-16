/**
 * 无锁图层
 *
 * @template {Layer} T
 * @template U
 * @param {T} layer
 * @param {(layer: T) => U} callback
 * @returns {U}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
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
