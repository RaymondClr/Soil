import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * CompItem 类型谓词
 *
 * @type {(value: any) => value is CompItem}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isCompItem: (value: any) => value is CompItem = createIsNativeType<CompItem>(CompItem);

export default isCompItem;
