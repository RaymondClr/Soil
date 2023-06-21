import isAddableProperty from "./isAddableProperty";

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
