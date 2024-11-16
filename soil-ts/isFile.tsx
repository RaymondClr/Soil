import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * 文件类型谓词
 *
 * @type {(value: any) => value is File}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isFile: (value: any) => value is File = createIsNativeType<File>(File);

export default isFile;
