import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * Property 谓词
 *
 * @type {(value: any) => value is Property}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isProperty: (value: any) => value is Property = createIsNativeType<Property>(Property);

export default isProperty;
