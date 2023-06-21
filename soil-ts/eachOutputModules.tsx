import collectionEach from "./_internal/_collectionEach";

function eachOutputModules<T extends RenderQueueItem>(renderQueueItem: T, iteratee: (outputModule: T["outputModules"][number], index: number, renderQueueItem: T) => boolean | void) {
    collectionEach(renderQueueItem.outputModules, (value, index) => {
        if (iteratee(value, index, renderQueueItem) === false) {
            return false;
        }
    });
}

export default eachOutputModules;
