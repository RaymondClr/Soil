function findKeyframeIndex<T extends Property>(property: T, predicate: (property: T, keyIndex: number) => boolean): number {
    let keyIndex = 0;
    const length = property.numKeys + 1;

    while (++keyIndex < length) {
        if (predicate(property, keyIndex)) {
            return keyIndex;
        }
    }
    return -1;
}

export default findKeyframeIndex;
