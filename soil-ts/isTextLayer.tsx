import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * 文本图层谓词
 *
 * @type {(value: any) => value is AVLayer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
const isTextLayer: (value: any) => value is TextLayer = createIsNativeType<TextLayer>(TextLayer);

export default isTextLayer;
