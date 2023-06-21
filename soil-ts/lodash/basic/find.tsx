function find<T>(array: Array<T>, predicate: ArrayIterator<T, boolean>): T | undefined {
    let index = -1;
    const length = array.length;

    while (++index < length) {
        const value = array[index];
        if (predicate(value, index, array)) {
            return value;
        }
    }
}

export default find;
