import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * ItemCollection 类型谓词
 *
 * @type {(value: any) => value is ItemCollection}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isItemCollection: (value: any) => value is ItemCollection = createIsNativeType<ItemCollection>(ItemCollection);

export default isItemCollection;
