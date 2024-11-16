import isAddableProperty from "./isAddableProperty";

/**
 * 添加 Property，不同于 addPropertyAlone，它忽略已存在属性。
 *
 * @param {_PropertyClasses} rootProperty
 * @param {AdbePath} path
 * @returns {(Property<UnknownPropertyType> | PropertyGroup | undefined)}
 * @since 0.1.0
 * @category Soil
 * @see addPropertyAlone
 * @example
 * foo(param)
 * // => result
 */
function addProperty(rootProperty: _PropertyClasses, path: AdbePath): Property<UnknownPropertyType> | PropertyGroup | undefined {
    let index = 0;
    const length = path.length;
    let nested = rootProperty;

    while (nested && isAddableProperty(nested) && index < length) {
        let name = path[index++];
        let next = nested.property(name);
        if (next) {
            nested = next;
        } else if (nested.canAddProperty(name)) {
            nested = nested.addProperty(name);
        }
    }
    return index && index === length ? nested : undefined;
}

export default addProperty;
