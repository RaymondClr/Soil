import addProperty from "./addProperty";
import canSetPropertyValue from "./canSetPropertyValue";

/**
 * 设置 Property 值
 *
 * @param {_PropertyClasses} rootProperty
 * @param {AdbePath} path
 * @param {*} value
 * @returns {(Property | undefined)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function setPropertyValue(rootProperty: _PropertyClasses, path: AdbePath, value: any): Property | undefined {
    const property = addProperty(rootProperty, path);
    if (canSetPropertyValue(property)) {
        property.setValue(value);
        return property;
    }
}

export default setPropertyValue;
