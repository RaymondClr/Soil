function collectionEach<T extends CollectionMembers>(collection: T, iteratee: (value: T[number], index: number, collection: T) => boolean | void) {
    let index = 0;
    const length = collection.length + 1;

    while (++index < length) {
        if (iteratee(collection[index], index, collection) === false) {
            break;
        }
    }
    return collection;
}

export default collectionEach;
