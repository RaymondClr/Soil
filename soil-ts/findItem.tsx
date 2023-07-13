function findItem<T extends Project | FolderItem>(collection: T, iteratee: CollectionIterator<_ItemClasses, T, boolean>) {
    let index = 0;
    const length = collection.numItems + 1;
    const items = collection.items;

    while (++index < length) {
        let item = items[index];
        if (iteratee(item, index, collection)) {
            return item;
        }
    }
}

export default findItem;
