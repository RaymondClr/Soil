import { SPATIAL_PROPERTY_VALUE_TYPE } from "./_internal/_global";
import { contains } from "./soil";
import isProperty from "./isProperty";

/**
 * 线性空间 Property 谓词
 *
 * @param {*} property
 * @returns {property is SpatialProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isSpatialProperty(property: any): property is SpatialProperty {
    return isProperty(property) && contains(SPATIAL_PROPERTY_VALUE_TYPE, property.propertyValueType);
}

export default isSpatialProperty;
