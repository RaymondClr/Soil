import createGetAppProperty from "./_internal/_createGetAppProperty";

/**
 * 获取首个选中的图层
 *
 * @type {() => Layer | undefined}
 * @since 0.1.0
 * @category Soil
 * @see getFirstSelectedProperty
 * @example
 *
 * ```ts
 * const selectedLayer = _.getFirstSelectedLayer();
 * if (_.isTextLayer(selectedLayer)) {
 *     alert(selectedLayer.name);
 * }
 * // 结果：在选中文本图层的前提下，会弹窗显示图层名称。
 * ```
 */
let getFirstSelectedLayer: () => Layer | undefined = createGetAppProperty<Layer | undefined>(["project", "activeItem", "selectedLayers", "0"]);

export default getFirstSelectedLayer;
