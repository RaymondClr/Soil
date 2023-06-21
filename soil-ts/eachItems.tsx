import collectionEach from "./_internal/_collectionEach";

function eachItems<T extends Project | FolderItem | RenderQueue>(itemCollection: T, iteratee: (value: T["items"][number], index: number, itemCollection: T) => boolean | void) {
    collectionEach(itemCollection.items, (value, index) => {
        if (iteratee(value, index, itemCollection) === false) {
            return false;
        }
    });
}

export default eachItems;
