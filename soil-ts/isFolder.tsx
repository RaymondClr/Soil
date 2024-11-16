import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * Folder 类型谓词
 *
 * @type {(value: any) => value is Folder}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isFolder: (value: any) => value is Folder = createIsNativeType<Folder>(Folder);

export default isFolder;
