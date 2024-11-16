import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * ScriptUI Panel 类型谓词
 *
 * @type {(value: any) => value is Panel}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isPanel: (value: any) => value is Panel = createIsNativeType<Panel>(Panel);

export default isPanel;
