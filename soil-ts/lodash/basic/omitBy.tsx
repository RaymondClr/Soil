import has from "../#has";

function omitBy<T extends object>(object: T, predicate: (value: T[keyof T]) => boolean): Partial<T> {
    const result: Partial<T> = {};

    for (const key in object) {
        if (has(object, key) && !predicate(object[key])) {
            result[key] = object[key];
        }
    }
    return result;
}

export default omitBy;
