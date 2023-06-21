import contains from "./contains";
import has from "../#has";

function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const result: any = {};

    for (const key in obj) {
        if (has(obj, key) && !contains(keys, key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

export default omit;
