import isFile from "./isFile";
import isFootageItem from "./isFootageItem";

function isImportedItem(value: any): value is FootageItem {
    return isFootageItem(value) && isFile(value.file);
}

export default isImportedItem;
