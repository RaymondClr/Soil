import eachKeyframeIndexesRight from "./eachKeyframeIndexesRight";

/**
 * 移除 Property 上的所有关键帧
 *
 * @template {CanSetValueProperty} T
 * @param {T} property
 * @returns {T}
 * @since 0.2.0
 * @category Soil
 * @see {@linkcode removeKeyframesBy}
 * @example
 *
 * ```ts
 * const selectedProperties = _.getSelectedProperties();
 * // 注意：如果没有活动合成会返回 undefined
 * if (selectedProperties) {
 *     _.forEach(selectedProperties, function (property) {
 *         if (_.hasKeyframes(property)) {
 *             _.removeKeyframes(property);
 *         }
 *     });
 * }
 * // 结果：选中的 Property 中，所有存在关键帧的 Porperty，关键帧都会被移除。
 * ```
 */
function removeKeyframes<T extends CanSetValueProperty>(property: T): T {
    eachKeyframeIndexesRight(property, function (property, keyIndex) {
        property.removeKey(keyIndex);
    });
    return property;
}

export default removeKeyframes;
