import has from "./lodash/#has";
import isCompItem from "./isCompItem";

function isLayer(value: any): value is Layer {
    return has(value, "containingComp") && isCompItem(value.containingComp) && value.parentProperty === null && value.propertyDepth === 0;
}

export default isLayer;
