import isProperty from "./isProperty";

/**
 * Property 存在关键帧谓词
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
function hasKeyframes(property: _PropertyClasses): property is Property {
    return isProperty(property) && property.numKeys > 0;
}

export default hasKeyframes;
