import baseFlatten from "./_baseFlatten";
import difference from "./difference";
import uniq from "../#uniq";

function xor<T>(...arrays: Array<Array<T>>): Array<T> {
    let values = arguments;
    const length = values.length;
    if (length < 2) {
        return length ? uniq(values[0]) : [];
    }
    var index = -1;
    const result = Array(length);
    while (++index < length) {
        let othIndex = -1;
        const array = values[index];
        while (++othIndex < length) {
            if (othIndex != index) {
                result[index] = difference(result[index] || array, values[othIndex]);
            }
        }
    }
    return uniq(baseFlatten(result, 1));
}

export default xor;
