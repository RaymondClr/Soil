import createIsNativeType from "./_internal/_createIsNativeType";

/**
 * 形状图层谓词
 *
 * @type {(value: any) => value is ShapeLayer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
const isShapeLayer: (value: any) => value is ShapeLayer = createIsNativeType<ShapeLayer>(ShapeLayer);

export default isShapeLayer;
