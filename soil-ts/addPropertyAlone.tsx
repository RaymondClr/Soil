import isAddableProperty from "./isAddableProperty";

/**
 * 单独添加 Property，不同于 addProperty，它无视已存在属性。
 *
 * @param {_PropertyClasses} rootProperty
 * @param {AdbePath} path
 * @returns {(_PropertyClasses | undefined)}
 * @since 0.1.0
 * @category Soil
 * @see addProperty
 * @example 
 * foo(param)
 * // => result
 */
function addPropertyAlone(rootProperty: _PropertyClasses, path: AdbePath): _PropertyClasses | undefined {
    let index = 0;
    const length = path.length;
    let nested = rootProperty;

    while (nested && isAddableProperty(nested) && index < length) {
        let name = String(path[index++]);
        nested = nested.canAddProperty(name) ? nested.addProperty(name) : nested.property(name);
    }
    return index && index === length ? nested : undefined;
}

export default addPropertyAlone;
