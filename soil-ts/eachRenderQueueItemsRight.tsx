import collectionEachRight from "./_internal/_collectionEachRight";

/**
 * 反向迭代 RenderQueueItems
 *
 * @template {RenderQueue} T
 * @param {T} renderQueue
 * @param {(renderQueueItem: T["items"][number], index: number, renderQueue: T) => boolean | void} iteratee
 * @returns {(boolean | void) => void)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function eachRenderQueueItemsRight<T extends RenderQueue>(renderQueue: T, iteratee: (renderQueueItem: T["items"][number], index: number, renderQueue: T) => boolean | void): (boolean | void) {
    collectionEachRight(renderQueue.items, (value, index) => {
        if (iteratee(value, index, renderQueue) === false) {
            return false;
        }
    });
}

export default eachRenderQueueItemsRight;
