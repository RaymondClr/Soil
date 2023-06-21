import map from "../#map";

function baseValues<T>(object: Dictionary<T>, props: Array<string>): Array<T> {
    return map(props, key => object[key]);
}

export default baseValues;
