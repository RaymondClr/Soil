import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * 渲染队列 Item 类型谓词
 *
 * @type {(value: any) => value is RenderQueueItem}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isRenderQueueItem: (value: any) => value is RenderQueueItem = createIsNativeType<RenderQueueItem>(RenderQueueItem);

export default isRenderQueueItem;
