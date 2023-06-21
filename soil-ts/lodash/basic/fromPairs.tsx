function fromPairs<T>(pairs: Array<[PropertyName, T]>): Dictionary<T> {
    let index = -1;
    const length = pairs == null ? 0 : pairs.length;
    const result: any = {};

    while (++index < length) {
        const pair = pairs[index];
        result[pair[0]] = pair[1];
    }
    return result;
}

export default fromPairs;
