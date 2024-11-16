import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * 形状图层谓词
 *
 * @type {*}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isShapeLayer = createIsNativeType<ShapeLayer>(ShapeLayer);

export default isShapeLayer;
