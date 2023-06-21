import getTag from "../_internal/_getTag";

function isArray(value: any): value is Array<any> {
    return getTag(value) == "[object Array]";
}

export default isArray;
