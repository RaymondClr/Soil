import createGetAppProperty from "./_internal/_createGetAppProperty";

/**
 * 获取选中图层
 *
 * @type {() => Layer[] | undefined}
 * @since 0.1.0
 * @category Soil
 * @see getFirstSelectedLayer, getSelectedItems
 * @example
 *
 * ```ts
 * const selectedLayers = _.getSelectedLayers();
 * // 注意：如果没有活动合成会返回 undefined
 * if (selectedLayers) {
 *     _.forEach(selectedLayers, function (layer) {
 *         layer.label = 2;
 *     });
 * }
 * // 结果：所有选中图层的标签色会被改为黄色。
 * ```
 */
let getSelectedLayers: () => Layer[] | undefined = createGetAppProperty<Array<Layer> | undefined>(["project", "activeItem", "selectedLayers"]);

export default getSelectedLayers;
