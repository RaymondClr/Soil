import hasKeyframes from "./hasKeyframes";

/**
 * Property 存在选中关键帧谓词
 *
 * @param {_PropertyClasses} property
 * @returns {property is Property}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function hasSelectedKeys(property: _PropertyClasses): property is Property {
    return hasKeyframes(property) && property.selectedKeys.length > 0;
}

export default hasSelectedKeys;
