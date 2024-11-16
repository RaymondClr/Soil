import collectionEachRight from "./_internal/_collectionEachRight";

/**
 * 反向迭代项目中的所有 Items
 *
 * @template {Project | FolderItem | RenderQueue} T
 * @param {T} itemCollection
 * @param {(value: T["items"][number], index: number, itemCollection: T) => boolean | void} iteratee
 * @returns {(boolean | void) => void)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function eachItemsRight<T extends Project | FolderItem | RenderQueue>(itemCollection: T, iteratee: (value: T["items"][number], index: number, itemCollection: T) => boolean | void): boolean | void {
    collectionEachRight(itemCollection.items, (value, index) => {
        if (iteratee(value, index, itemCollection) === false) {
            return false;
        }
    });
}

export default eachItemsRight;
