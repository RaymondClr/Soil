import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * 相机图层类型谓词
 *
 * @type {(value: any) => value is CameraLayer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isCameraLayer: (value: any) => value is CameraLayer = createIsNativeType<CameraLayer>(CameraLayer);

export default isCameraLayer;
