import has from "../#has";

function mapValues<T, U>(object: Record<string, T>, iteratee: (value: T, key: string, object: Record<string, T>) => U): Record<string, U> {
    const result: Record<string, U> = {};

    for (const key in object) {
        if (has(object, key)) {
            result[key] = iteratee(object[key], key, object);
        }
    }
    return result;
}

export default mapValues;
