import isFootageItem from "./isFootageItem";

function isSourceFileMissing(value: any): value is FootageItem {
    return isFootageItem(value) && value.footageMissing;
}

export default isSourceFileMissing;
