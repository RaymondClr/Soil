function findIndex<T>(array: Array<T>, predicate: ArrayIterator<T, boolean>): number {
    let index = -1;
    const length = array.length;

    while (++index < length) {
        if (predicate(array[index], index, array)) {
            return index;
        }
    }
    return -1;
}

export default findIndex;
