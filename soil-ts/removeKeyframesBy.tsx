import eachKeyframeIndexesRight from "./eachKeyframeIndexesRight";

/**
 * 移除 Property 上的关键帧，通过 predicate 判断哪些关键帧需要被移除。
 *
 * @template {CanSetValueProperty} T
 * @param {T} property
 * @param {(property: T, keyIndex: number) => boolean} predicate
 * @returns {T}
 * @since 0.2.0
 * @category Soil
 * @see {@linkcode removeKeyframes}
 * @example
 *
 * ```ts
 * const selectedProperties = _.getSelectedProperties();
 * // 注意：如果没有活动合成会返回 undefined
 * if (selectedProperties) {
 *     const keysProperties = _.filter(selectedProperties, _.hasKeyframes);
 *     // 注意：由于 Property 的关键被移除后，所有其它 Property 的选中状态会被释放，所以需要缓存关键帧索引。
 *     const keyIndexesGroup = _.map(keysProperties, (property) => property.selectedKeys);
 *     _.forEach(keysProperties, function (property, index) {
 *         if (_.hasKeyframes(property)) {
 *             const keyIndexes = keyIndexesGroup[index];
 *             _.removeKeyframesBy(property, function (property, keyIndex) {
 *                 return _.contains(keyIndexes, keyIndex);
 *             });
 *         }
 *     });
 * }
 * // 结果：选中的 Property 中，所有选中的关键帧都会被移除。
 * ```
 */
function removeKeyframesBy<T extends CanSetValueProperty>(property: T, predicate: (property: T, keyIndex: number) => boolean): T {
    eachKeyframeIndexesRight(property, function (property, keyIndex) {
        if (predicate(property, keyIndex)) {
            property.removeKey(keyIndex);
        }
    });
    return property;
}

export default removeKeyframesBy;
