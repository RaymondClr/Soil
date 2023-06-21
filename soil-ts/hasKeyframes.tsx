import isProperty from "./isProperty";

function hasKeyframes(property: _PropertyClasses): property is Property {
    return isProperty(property) && property.numKeys > 0;
}

export default hasKeyframes;
