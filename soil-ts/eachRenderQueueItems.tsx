import collectionEach from "./_internal/_collectionEach";

/**
 * 迭代 RenderQueueItems
 *
 * @template {RenderQueue} T
 * @param {T} renderQueue
 * @param {(renderQueueItem: T["items"][number], index: number, renderQueue: T) => unknown} iteratee
 * @returns {T}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 *
 * ```ts
 * _.eachRenderQueueItems(app.project.renderQueue, function (renderQueueItem, index) {
 *     _.log(`${index} ${renderQueueItem.status}`);
 * });
 * // 结果：桌面日志会记录项目中所有渲染队列 Item 的渲染状态。
 * ```
 */
function eachRenderQueueItems<T extends RenderQueue>(renderQueue: T, iteratee: (renderQueueItem: T["items"][number], index: number, renderQueue: T) => unknown): T {
    collectionEach(renderQueue.items, (value, index) => {
        if (iteratee(value, index, renderQueue) === false) {
            return false;
        }
    });
    return renderQueue;
}

export default eachRenderQueueItems;
