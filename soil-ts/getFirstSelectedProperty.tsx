import createGetAppProperty from "./_internal/_createGetAppProperty";

/**
 * 获取首个选中的图层
 *
 * @type {() => Layer | undefined}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
let getFirstSelectedProperty: () => Layer | undefined = createGetAppProperty<Layer | undefined>(["project", "activeItem", "selectedLayers", "0"]);

export default getFirstSelectedProperty;
