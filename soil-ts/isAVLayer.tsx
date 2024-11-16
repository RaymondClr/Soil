import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * AVLayer 类型谓词
 *
 * @type {(value: any) => value is AVLayer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isAVLayer: (value: any) => value is AVLayer = createIsNativeType<AVLayer>(AVLayer);

export default isAVLayer;
