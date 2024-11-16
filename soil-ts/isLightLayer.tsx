import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * 灯光图层谓词
 *
 * @type {(value: any) => value is LightLayer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isLightLayer: (value: any) => value is LightLayer = createIsNativeType<LightLayer>(LightLayer);

export default isLightLayer;
