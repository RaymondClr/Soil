import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * Window 类型谓词
 *
 * @type {(value: any) => value is Window}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isWindow: (value: any) => value is Window = createIsNativeType<Window>(Window);

export default isWindow;
