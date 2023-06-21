import collectionEach from "./_internal/_collectionEach";

function eachRenderQueueItems<T extends RenderQueue>(renderQueue: T, iteratee: (renderQueueItem: T["items"][number], index: number, renderQueue: T) => boolean | void) {
    collectionEach(renderQueue.items, (value, index) => {
        if (iteratee(value, index, renderQueue) === false) {
            return false;
        }
    });
}

export default eachRenderQueueItems;
