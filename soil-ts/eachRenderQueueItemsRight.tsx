import collectionEachRight from "./_internal/_collectionEachRight";

function eachRenderQueueItemsRight<T extends RenderQueue>(renderQueue: T, iteratee: (renderQueueItem: T["items"][number], index: number, renderQueue: T) => boolean | void) {
    collectionEachRight(renderQueue.items, (value, index) => {
        if (iteratee(value, index, renderQueue) === false) {
            return false;
        }
    });
}

export default eachRenderQueueItemsRight;
