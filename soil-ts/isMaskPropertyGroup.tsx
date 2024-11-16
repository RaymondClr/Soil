import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * MaskPropertyGroup 类型谓词
 *
 * @type {(value: any) => value is MaskPropertyGroup}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isMaskPropertyGroup: (value: any) => value is MaskPropertyGroup = createIsNativeType<MaskPropertyGroup>(MaskPropertyGroup);

export default isMaskPropertyGroup;
