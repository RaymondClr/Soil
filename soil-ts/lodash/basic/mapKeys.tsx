function mapKeys<T, U extends keyof any>(object: T, iteratee: (value: T[keyof T], key: keyof T, object: T) => U): { [P in U]: T[keyof T] } {
    const result: any = {};

    for (const key in object) {
        const value = object[key];
        result[iteratee(value, key, object)] = value;
    }
    return result;
}

export default mapKeys;
