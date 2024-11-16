import createIsAVLayer from "./_internal/_createIsAVLayer";
import isCompItem from "./isCompItem";

/**
 * 合成图层谓词
 *
 * @type {(value: any) => value is AVLayer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isCompLayer: (value: any) => value is AVLayer = createIsAVLayer(layer => isCompItem(layer.source));

export default isCompLayer;
