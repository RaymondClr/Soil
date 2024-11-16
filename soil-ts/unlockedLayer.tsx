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
