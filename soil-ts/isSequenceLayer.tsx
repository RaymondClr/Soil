import createIsAVLayer from "./_internal/_createIsAVLayer";
import isSequenceItem from "./isSequenceItem";

/**
 * 序列帧图层谓词
 *
 * @type {(value: any) => value is AVLayer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isSequenceLayer: (value: any) => value is AVLayer = createIsAVLayer(layer => isSequenceItem(layer.source));

export default isSequenceLayer;
