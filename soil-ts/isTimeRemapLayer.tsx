import createIsAVLayer from "./_internal/_createIsAVLayer";

/**
 * 图层启用时间重映射谓词
 *
 * @type {*}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
const isTimeRemapLayer: (value: any) => value is AVLayer = createIsAVLayer(layer => layer.timeRemapEnabled);

export default isTimeRemapLayer;
