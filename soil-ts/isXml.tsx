import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * XML 类型谓词
 *
 * @type {(value: any) => value is XML}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
const isXml: (value: any) => value is XML = createIsNativeType<XML>(XML);

export default isXml;
