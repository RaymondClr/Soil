import createIsAVLayer from "./_internal/_createIsAVLayer";
import isImportedItem from "./isImportedItem";

/**
 * 图层源素材为外部导入谓词
 *
 * @type {(value: any) => value is AVLayer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
const isImportedLayer: (value: any) => value is AVLayer = createIsAVLayer(layer => isImportedItem(layer.source));

export default isImportedLayer;
