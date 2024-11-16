import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * RQItemCollection 类型谓词
 *
 * @type {(value: any) => value is RQItemCollection}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
let isRQItemCollection: (value: any) => value is RQItemCollection = createIsNativeType<RQItemCollection>(RQItemCollection);

export default isRQItemCollection;
