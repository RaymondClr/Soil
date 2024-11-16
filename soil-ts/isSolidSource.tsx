import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * SolidSource 类型谓词
 *
 * @type {(value: any) => value is SolidSource}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isSolidSource: (value: any) => value is SolidSource = createIsNativeType<SolidSource>(SolidSource);

export default isSolidSource;
