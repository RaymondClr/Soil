import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * OMCollection 类型谓词
 *
 * @type {(value: any) => value is OMCollection}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isOMCollection: (value: any) => value is OMCollection = createIsNativeType<OMCollection>(OMCollection);

export default isOMCollection;
