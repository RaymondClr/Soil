/**
 * 迭代 Property 关键帧索引
 *
 * @template {CanSetValueProperty} T
 * @param {T} property
 * @param {(property: T, keyIndex: number) => unknown} iteratee
 * @returns {T}
 * @since 0.2.0
 * @category Soil
 * @see {@linkcode eachKeyframeIndexesRight}
 * @example
 *
 * ```ts
 * const selectedProperty = _.getFirstSelectedProperty();
 * // 注意：如果没有活动合成会返回 undefined
 * if (selectedProperty) {
 *     if (_.hasKeyframes(selectedProperty)) {
 *         _.eachKeyframeIndexes(selectedProperty, function (property, keyIndex) {
 *             _.log(property.keyTime);
 *         });
 *     }
 * }
 * // 结果：桌面日志会记录选中 Property 上的所有关键帧的时间。
 * ```
 */
function eachKeyframeIndexes<T extends CanSetValueProperty>(property: T, iteratee: (property: T, keyIndex: number) => unknown): T {
    let keyIndex = 0;
    const length = property.numKeys + 1;

    while (++keyIndex < length) {
        if (iteratee(property, keyIndex) === false) {
            break;
        }
    }
    return property;
}

export default eachKeyframeIndexes;
