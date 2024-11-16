import collectionEach from "./_internal/_collectionEach";

/**
 * 迭代 OutputModules
 *
 * @template {RenderQueueItem} T
 * @param {T} renderQueueItem
 * @param {(outputModule: T["outputModules"][number], index: number, renderQueueItem: T) => boolean | void} iteratee
 * @returns {(boolean | void) => void)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function eachOutputModules<T extends RenderQueueItem>(renderQueueItem: T, iteratee: (outputModule: T["outputModules"][number], index: number, renderQueueItem: T) => boolean | void): (boolean | void) {
    collectionEach(renderQueueItem.outputModules, (value, index) => {
        if (iteratee(value, index, renderQueueItem) === false) {
            return false;
        }
    });
}

export default eachOutputModules;
