function findKeyframeTime<T extends Property>(property: T, predicate: (property: T, keyIndex: number) => boolean): number | null {
    let keyIndex = 0;
    const length = property.numKeys + 1;

    while (++keyIndex < length) {
        if (predicate(property, keyIndex)) {
            return property.keyTime(keyIndex);
        }
    }
    return null;
}

export default findKeyframeTime;
