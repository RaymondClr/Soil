import collectionEachRight from "./_internal/_collectionEachRight";

/**
 * 反向迭代 RenderQueueItems
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
 * _.eachRenderQueueItemsRight(app.project.renderQueue, function (renderQueueItem) {
 *     renderQueueItem.remove();
 * });
 * // 结果：Ae 渲染队列的所有渲染子项都会被删除。
 * ```
 */
function eachRenderQueueItemsRight<T extends RenderQueue>(renderQueue: T, iteratee: (renderQueueItem: T["items"][number], index: number, renderQueue: T) => unknown): T {
    collectionEachRight(renderQueue.items, (value, index) => {
        if (iteratee(value, index, renderQueue) === false) {
            return false;
        }
    });
    return renderQueue;
}

export default eachRenderQueueItemsRight;
