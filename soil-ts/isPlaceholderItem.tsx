import has from "./lodash/#has";
import isSourceFileMissing from "./isSourceFileMissing";

function isPlaceholderItem(value: any): value is FootageItem {
    return isSourceFileMissing(value) && !has(value.mainSource, "missingFootagePath");
}

export default isPlaceholderItem;
