import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * LayerCollection 类型谓词
 *
 * @type {(value: any) => value is LayerCollection}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isLayerCollection: (value: any) => value is LayerCollection = createIsNativeType<LayerCollection>(LayerCollection);

export default isLayerCollection;
