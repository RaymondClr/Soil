import createIsAVLayer from "./_internal/_createIsAVLayer";

/**
 * 参考图层谓词
 *
 * @type {*}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isGuideLayer = createIsAVLayer(layer => layer.guideLayer);

export default isGuideLayer;
