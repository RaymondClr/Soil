import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * 文件夹 Item 谓词
 *
 * @type {(value: any) => value is FolderItem}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isFolderItem: (value: any) => value is FolderItem = createIsNativeType<FolderItem>(FolderItem);

export default isFolderItem;
