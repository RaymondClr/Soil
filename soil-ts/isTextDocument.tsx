import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * 文本文档类型谓词
 *
 * @type {(value: any) => value is TextDocument}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isTextDocument: (value: any) => value is TextDocument = createIsNativeType<TextDocument>(TextDocument);

export default isTextDocument;
