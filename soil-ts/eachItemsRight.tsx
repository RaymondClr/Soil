import collectionEachRight from "./_internal/_collectionEachRight";

function eachItemsRight<T extends Project | FolderItem | RenderQueue>(itemCollection: T, iteratee: (value: T["items"][number], index: number, itemCollection: T) => boolean | void) {
    collectionEachRight(itemCollection.items, (value, index) => {
        if (iteratee(value, index, itemCollection) === false) {
            return false;
        }
    });
}

export default eachItemsRight;
