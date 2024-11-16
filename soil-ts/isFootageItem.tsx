import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * 素材 Item 谓词
 *
 * @type {(value: any) => value is FootageItem}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isFootageItem: (value: any) => value is FootageItem = createIsNativeType<FootageItem>(FootageItem);

export default isFootageItem;
