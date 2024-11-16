/**
 * 通过谓词查找关键帧索引
 *
 * @template {Property} T
 * @param {T} property
 * @param {(property: T, keyIndex: number) => boolean} predicate
 * @returns {number}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function findKeyframeIndex<T extends Property>(property: T, predicate: (property: T, keyIndex: number) => boolean): number {
    let keyIndex = 0;
    const length = property.numKeys + 1;

    while (++keyIndex < length) {
        if (predicate(property, keyIndex)) {
            return keyIndex;
        }
    }
    return -1;
}

export default findKeyframeIndex;
