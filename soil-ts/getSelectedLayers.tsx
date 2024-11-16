import createGetAppProperty from "./_internal/_createGetAppProperty";

/**
 * 获取选中图层
 *
 * @type {() => Layer[] | undefined}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
let getSelectedLayers: () => Layer[] | undefined = createGetAppProperty<Array<Layer> | undefined>(["project", "activeItem", "selectedLayers"]);

export default getSelectedLayers;
