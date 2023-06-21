function arrayPush<T, U>(array: Array<T | U>, values: Array<U>): Array<T | U> {
    let index = -1;
    const length = values.length;
    const offset = array.length;

    while (++index < length) {
        array[offset + index] = values[index];
    }
    return array;
}

export default arrayPush;
