import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * Application 类型谓词
 *
 * @type {(value: any) => value is Application}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isApp: (value: any) => value is Application = createIsNativeType<Application>(Application);

export default isApp;
