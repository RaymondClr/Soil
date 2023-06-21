import map from "../#map";

function baseToPairs<T extends object>(object: T, props: Array<keyof T>): Array<Array<keyof T | T[keyof T]>> {
    return map(props, key => [key, object[key]]);
}

export default baseToPairs;
