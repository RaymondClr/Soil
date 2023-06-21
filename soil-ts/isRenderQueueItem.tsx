import createIsNativeType from "./_internal/_createIsNativeType";

const isRenderQueueItem = createIsNativeType<RenderQueueItem>(RenderQueueItem);

export default isRenderQueueItem;
