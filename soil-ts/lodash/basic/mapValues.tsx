import has from "../#has";

function mapValues<T, U>(object: _Record<string, T>, iteratee: (value: T, key: string, object: _Record<string, T>) => U): _Record<string, U> {
    const result: _Record<string, U> = {};

    for (const key in object) {
        if (has(object, key)) {
            result[key] = iteratee(object[key], key, object);
        }
    }
    return result;
}

export default mapValues;
