/**
 * 通过谓词查找关键帧索引
 *
 * @template {Property} T
 * @param {T} property
 * @param {(property: T, keyIndex: number) => boolean} predicate
 * @returns {number}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode findKeyframeTime}
 * @example
 *
 * ```ts
 * const selectedProperty = _.getFirstSelectedProperty();
 * if (selectedProperty) {
 *     if (_.hasKeyframes(selectedProperty)) {
 *         const firstSelectedKeyIndex = _.findKeyframeIndex(selectedProperty, (property, keyIndex) => property.keySelected(keyIndex));
 *         alert(firstSelectedKeyIndex);
 *     }
 * }
 * // 结果：弹窗会显示选中 Property 中第一个被选中的关键帧的索引。
 * ```
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
