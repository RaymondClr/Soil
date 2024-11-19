/**
 * 反向迭代 Property 关键帧索引
 *
 * @template {CanSetValueProperty} T
 * @param {T} property
 * @param {(property: T, keyIndex: number) => unknown} iteratee
 * @returns {T}
 * @since 0.2.0
 * @category Soil
 * @see eachKeyframeIndexes
 * @example
 *
 * ```ts
 * const selectedProperty = _.getFirstSelectedProperty();
 * // 注意：如果没有活动合成会返回 undefined
 * if (selectedProperty) {
 *     if (_.hasKeyframes(selectedProperty)) {
 *         _.eachKeyframeIndexesRight(selectedProperty, function (property, keyIndex) {
 *             property.removeKey(keyIndex);
 *         });
 *     }
 * }
 * // 结果：选中 Property 上的所有关键帧都会被移除。
 * ```
 */
function eachKeyframeIndexesRight<T extends CanSetValueProperty>(property: T, iteratee: (property: T, keyIndex: number) => unknown): T {
    let keyIndex = property.numKeys + 1;

    while (--keyIndex) {
        if (iteratee(property, keyIndex) === false) {
            break;
        }
    }
    return property;
}

export default eachKeyframeIndexesRight;
