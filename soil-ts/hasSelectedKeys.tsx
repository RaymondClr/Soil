import hasKeyframes from "./hasKeyframes";

function hasSelectedKeys(property: _PropertyClasses): property is Property {
    return hasKeyframes(property) && property.selectedKeys.length > 0;
}

export default hasSelectedKeys;
