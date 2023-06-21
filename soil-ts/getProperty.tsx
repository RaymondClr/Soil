import isString from "./lodash/#isString";
import baseGetPropertyByIndex from "./_internal/_baseGetPropertyByIndex";
import isAddableProperty from "./isAddableProperty";

function getProperty(rootProperty: _PropertyClasses | null, path: Array<PropertyName>): _PropertyClasses | undefined | null {
    let index = 0;
    const length = path.length;
    let nested = rootProperty;

    while (nested && isAddableProperty(nested) && index < length) {
        const name = path[index++];
        nested = isString(name) ? nested.property(name) : baseGetPropertyByIndex(nested, name);
    }
    return index && index === length ? nested : undefined;
}

export default getProperty;
