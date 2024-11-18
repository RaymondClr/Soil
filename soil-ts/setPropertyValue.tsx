import addProperty from "./addProperty";
import canSetPropertyValue from "./canSetPropertyValue";

/**
 * 设置 Property 值
 *
 * @template {UnknownPropertyType} T
 * @param {_PropertyClasses} rootProperty
 * @param {AdbePath} path
 * @param {*} value
 * @returns {(Property<T> | undefined)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function setPropertyValue<T extends UnknownPropertyType>(rootProperty: _PropertyClasses, path: AdbePath, value: any): Property<T> | undefined {
    const property = addProperty(rootProperty, path) as T;
    if (canSetPropertyValue(property)) {
        property.setValue(value);
        return property;
    }
}

export default setPropertyValue;
