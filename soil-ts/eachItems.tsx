import collectionEach from "./_internal/_collectionEach";

/**
 * 迭代项目中的所有 Items
 *
 * @template {Project | FolderItem | RenderQueue} T
 * @param {T} itemCollection
 * @param {(value: T["items"][number], index: number, itemCollection: T) => unknown} iteratee
 * @returns {T}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode eachItemsRight}
 * @example
 *
 * ```ts
 * _.eachItems(app.project, function (item, index) {
 *     _.log(`${index} ${item.name}`);
 * });
 * // 结果：桌面日志会记录项目中所有 Item 的名称。
 *
 * _.eachItems(app.project.rootFolder, function (item, index) {
 *     _.log(`${index} ${item.name}`);
 * });
 * // 结果：桌面日志会记录项目中根目录下所有 Item 的名称。
 *
 * _.eachItems(app.project.renderQueue, function (renderQueueItem, index) {
 *     _.log(`${index} ${renderQueueItem.comp.name}`);
 * });
 * // 结果：桌面日志会记录项目中所有 renderQueueItem 对应的合成名称。
 * ```
 */
function eachItems<T extends Project | FolderItem | RenderQueue>(itemCollection: T, iteratee: (value: T["items"][number], index: number, itemCollection: T) => unknown): T {
    collectionEach(itemCollection.items, (value, index) => {
        if (iteratee(value, index, itemCollection) === false) {
            return false;
        }
    });
    return itemCollection;
}

export default eachItems;
