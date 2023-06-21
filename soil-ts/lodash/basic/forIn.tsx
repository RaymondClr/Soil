function forIn<T>(object: T, iteratee: ObjectIterator<T, boolean | void>): T {
    for (const key in object) {
        if (iteratee(object[key], key, object) === false) {
            break;
        }
    }
    return object;
}

export default forIn;
