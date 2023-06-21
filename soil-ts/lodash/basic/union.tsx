import uniq from "../#uniq";
import flatten from "../#flatten";

function union<T>(...arrays: Array<Array<T>>): Array<T> {
    const values = arguments as any;
    return uniq(flatten(values));
}

export default union;
