import collectionEach from "./_internal/_collectionEach";

/**
 * 迭代 OutputModules
 *
 * @template {RenderQueueItem} T
 * @param {T} renderQueueItem
 * @param {(outputModule: T["outputModules"][number], index: number, renderQueueItem: T) => unknown} iteratee
 * @returns {T}
 * @since 0.1.0
 * @category Soil
 * @see eachOutputModulesRight
 * @example
 *
 * ```ts
 * _.eachItems(app.project.renderQueue, function (renderQueueItem, index) {
 *     _.eachOutputModules(renderQueueItem, function (outputModule) {
 *         _.log(`${index} ${outputModule.name}`);
 *     });
 * });
 * // 结果：桌面日志会记录项目中所有输出模块的名称。
 * ```
 */
function eachOutputModules<T extends RenderQueueItem>(renderQueueItem: T, iteratee: (outputModule: T["outputModules"][number], index: number, renderQueueItem: T) => unknown): T {
    collectionEach(renderQueueItem.outputModules, (value, index) => {
        if (iteratee(value, index, renderQueueItem) === false) {
            return false;
        }
    });
    return renderQueueItem;
}

export default eachOutputModules;
