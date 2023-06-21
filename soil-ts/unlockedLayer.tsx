function unlockedLayer<T>(layer: Layer, callback: (layer: Layer) => T): T {
    if (!layer.locked) {
        return callback(layer);
    }
    let result: T;
    layer.locked = false;
    result = callback(layer);
    layer.locked = true;
    return result;
}

export default unlockedLayer;
