import isAddableProperty from "./isAddableProperty";

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
