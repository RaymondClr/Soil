import createIsAVLayer from "./_internal/_createIsAVLayer";
import isFootageItem from "./isFootageItem";

/**
 * 素材图层谓词
 *
 * @type {(value: any) => value is AVLayer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isFootageLayer: (value: any) => value is AVLayer = createIsAVLayer(layer => isFootageItem(layer.source));

export default isFootageLayer;
