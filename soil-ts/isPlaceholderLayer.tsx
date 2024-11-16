import createIsAVLayer from "./_internal/_createIsAVLayer";
import isPlaceholderItem from "./isPlaceholderItem";

/**
 * 占位符图层谓词
 *
 * @type {(value: any) => value is AVLayer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isPlaceholderLayer: (value: any) => value is AVLayer = createIsAVLayer(layer => isPlaceholderItem(layer.source));

export default isPlaceholderLayer;
