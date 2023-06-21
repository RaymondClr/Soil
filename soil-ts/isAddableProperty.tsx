import isLayer from "./isLayer";
import isMaskPropertyGroup from "./isMaskPropertyGroup";
import isPropertyGroup from "./isPropertyGroup";

function isAddableProperty(value: any): value is EditableProperty {
    return isPropertyGroup(value) || isMaskPropertyGroup(value) || isLayer(value);
}

export default isAddableProperty;
