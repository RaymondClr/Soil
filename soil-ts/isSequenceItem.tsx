import isFootageItem from "./isFootageItem";

function isSequenceItem(value: any): value is FootageItem {
    return isFootageItem(value) && value.mainSource.conformFrameRate > 0 && value.hasAudio === false;
}

export default isSequenceItem;
