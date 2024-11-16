import createIsAVLayer from "./_internal/_createIsAVLayer";

/**
 * 调整图层谓词
 *
 * @type {(value: any) => value is AVLayer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isAdjustmentLayer: (value: any) => value is AVLayer = createIsAVLayer(layer => layer.adjustmentLayer);

export default isAdjustmentLayer;
