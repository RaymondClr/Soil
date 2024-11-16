import has from "./lodash/#has";
import isCompItem from "./isCompItem";

/**
 * 图层谓词
 *
 * @param {*} value
 * @returns {value is Layer}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isLayer(value: any): value is Layer {
    return has(value, "containingComp") && isCompItem(value.containingComp) && value.parentProperty === null && value.propertyDepth === 0;
}

export default isLayer;
