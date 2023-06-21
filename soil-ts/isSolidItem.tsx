import isFootageItem from "./isFootageItem";
import isSolidSource from "./isSolidSource";

function isSolidItem(item: Item): item is FootageItem {
    return isFootageItem(item) && isSolidSource(item.mainSource);
}

export default isSolidItem;
