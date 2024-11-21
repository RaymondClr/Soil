import canSetPropertyValue from "./canSetPropertyValue";
import isProperty from "./isProperty";

/**
 * Property 存在关键帧谓词
 *
 * @param {_PropertyClasses} property
 * @returns {property is CanSetValueProperty}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode hasSelectedKeys}
 * @example
 *
 * ```ts
 * const selectedProperty = _.getFirstSelectedProperty();
 * // 注意：如果没有活动合成会返回 undefined
 * if (selectedProperty) {
 *     if (_.hasKeyframes(selectedProperty)) {
 *         const keys = _.getKeyframeValues(selectedProperty);
 *         const offsetKeys = _.map(keys, function (key) {
 *             key.keyTime += 0.1;
 *             return key;
 *         });
 *         _.removeKeyframes(selectedProperty);
 *         _.setKeyframeValues(selectedProperty, offsetKeys);
 *     }
 * }
 * // 结果：在选中的 Property 存在关键帧的前提下，所有关键帧会向右偏移 0.1 秒。
 * ```
 */
function hasKeyframes(property: _PropertyClasses): property is CanSetValueProperty {
    return isProperty(property) && canSetPropertyValue(property) && property.numKeys > 0;
}

export default hasKeyframes;
