import arrayPush from "./_arrayPush";
import isFlattenable from "./isFlattenable";

function baseFlatten<T>(array: NestedArray<T>, depth: number, result: Array<T> = []) {
    let index = -1;
    const length = array.length;

    while (++index < length) {
        const value = array[index];
        if (depth > 0 && isFlattenable(value)) {
            depth > 1 ? baseFlatten(value, depth - 1, result) : arrayPush(result, value);
        } else {
            result[result.length] = value as T;
        }
    }
    return result;
}

export default baseFlatten;
