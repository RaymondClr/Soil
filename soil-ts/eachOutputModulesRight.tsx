import collectionEachRight from "./_internal/_collectionEachRight";

/**
 * 反向迭代 OutputModules
 *
 * @template {RenderQueueItem} T
 * @param {T} renderQueueItem
 * @param {(outputModule: T["outputModules"][number], index: number, renderQueueItem: T) => boolean | void} iteratee
 * @returns {(boolean | void) => void)}
 * @since 0.1.0
 * @category Soil
 * @see eachOutputModules
 * @example
 *
 * ```ts
 * _.eachItemsRight(app.project.renderQueue, function (renderQueueItem) {
 *     _.eachOutputModulesRight(renderQueueItem, function (outputModule, index) {
 *         if (index > 1) {
 *             // 注意：Ae 不允许删除第一个输出模块。
 *             outputModule.remove();
 *         }
 *     });
 * });
 * // 结果：项目中的所有输出模块都会被删除（不包含每个渲染项目的第一个输出模块）。
 * ```
 */
function eachOutputModulesRight<T extends RenderQueueItem>(renderQueueItem: T, iteratee: (outputModule: T["outputModules"][number], index: number, renderQueueItem: T) => boolean | void): (boolean | void) {
    collectionEachRight(renderQueueItem.outputModules, (value, index) => {
        if (iteratee(value, index, renderQueueItem) === false) {
            return false;
        }
    });
}

export default eachOutputModulesRight;
