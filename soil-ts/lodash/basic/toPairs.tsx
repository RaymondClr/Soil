import baseToPairs from "./_baseToPairs";
import keys from "../#keys";

function toPairs<T extends object>(object: T): Array<Array<keyof T | T[keyof T]>> {
    return baseToPairs(object, keys(object));
}

export default toPairs;
