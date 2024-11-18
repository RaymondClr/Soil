import collectionEachRight from "./_internal/_collectionEachRight";

/**
 * 反向迭代项目中的所有 Items
 *
 * @template {Project | FolderItem | RenderQueue} T
 * @param {T} itemCollection
 * @param {(value: T["items"][number], index: number, itemCollection: T) => boolean | void} iteratee
 * @returns {T}
 * @since 0.1.0
 * @category Soil
 * @see eachItems
 * @example
 *
 * ```ts
 * _.eachItemsRight(app.project, function (item) {
 *     item.remove();
 * });
 * // 结果：项目中的所有 Item 都会被删除。
 * ```
 */
function eachItemsRight<T extends Project | FolderItem | RenderQueue>(itemCollection: T, iteratee: (value: T["items"][number], index: number, itemCollection: T) => boolean | void): T {
    collectionEachRight(itemCollection.items, (value, index) => {
        if (iteratee(value, index, itemCollection) === false) {
            return false;
        }
    });
    return itemCollection;
}

export default eachItemsRight;
