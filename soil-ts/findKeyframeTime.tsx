/**
 * 通过谓词查找关键帧时间
 *
 * @template {Property} T
 * @param {T} property
 * @param {(property: T, keyIndex: number) => boolean} predicate
 * @returns {(number | null)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function findKeyframeTime<T extends Property>(property: T, predicate: (property: T, keyIndex: number) => boolean): number | null {
    let keyIndex = 0;
    const length = property.numKeys + 1;

    while (++keyIndex < length) {
        if (predicate(property, keyIndex)) {
            return property.keyTime(keyIndex);
        }
    }
    return null;
}

export default findKeyframeTime;
