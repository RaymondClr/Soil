import collectionEachRight from "./_internal/_collectionEachRight";

function eachOutputModulesRight<T extends RenderQueueItem>(renderQueueItem: T, iteratee: (outputModule: T["outputModules"][number], index: number, renderQueueItem: T) => boolean | void) {
    collectionEachRight(renderQueueItem.outputModules, (value, index) => {
        if (iteratee(value, index, renderQueueItem) === false) {
            return false;
        }
    });
}

export default eachOutputModulesRight;
