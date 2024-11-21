import hasKeyframes from "./hasKeyframes";

/**
 * Property 存在选中关键帧谓词
 *
 * @param {_PropertyClasses} property
 * @returns {property is CanSetValueProperty}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode hasKeyframes}
 * @example
 *
 * ```ts
 * const selectedProperty = _.getFirstSelectedProperty();
 * // 注意：如果没有活动合成会返回 undefined
 * if (selectedProperty) {
 *     if (_.hasSelectedKeys(selectedProperty)) {
 *         const selectedKeys = selectedProperty.selectedKeys;
 *         _.removeKeyframesBy(selectedProperty, function (keyIndex) {
 *             return _.contains(selectedKeys, keyIndex);
 *         });
 *     }
 * }
 * // 结果：选中 Property 存在关键帧的前提下，所有选中的关键帧都会被移除。
 * ```
 */
function hasSelectedKeys(property: _PropertyClasses): property is CanSetValueProperty {
    return hasKeyframes(property) && property.selectedKeys.length > 0;
}

export default hasSelectedKeys;
