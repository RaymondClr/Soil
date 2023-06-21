function collectionEachRight<T extends CollectionMembers>(collection: T, iteratee: (value: T[number], index: number, collection: T) => boolean | void) {
    let index = collection.length + 1;

    while (--index) {
        if (iteratee(collection[index], index, collection) === false) {
            break;
        }
    }
    return collection;
}

export default collectionEachRight;
