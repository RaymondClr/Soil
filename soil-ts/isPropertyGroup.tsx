import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * PropertyGroup 类型谓词
 *
 * @type {(value: any) => value is PropertyGroup}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isPropertyGroup: (value: any) => value is PropertyGroup = createIsNativeType<PropertyGroup>(PropertyGroup);

export default isPropertyGroup;
