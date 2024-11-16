import addPropertyAlone from "./addPropertyAlone";
import isProperty from "./isProperty";

/**
 * 单独设置 Property 值
 *
 * @param {_PropertyClasses} rootProperty
 * @param {AdbePath} path
 * @param {*} value
 * @returns {(Property | undefined)}
 * @since 0.1.0
 * @category Soil
 * @see setPropertyValue
 * @example 
 * foo(param)
 * // => result
 */
function setPropertyValueAlone(rootProperty: _PropertyClasses, path: AdbePath, value: any): Property | undefined {
    const property = addPropertyAlone(rootProperty, path);
    if (isProperty(property)) {
        property.setValue(value);
        return property;
    }
}

export default setPropertyValueAlone;
