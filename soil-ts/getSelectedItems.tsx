import createGetAppProperty from "./_internal/_createGetAppProperty";

/**
 * 获取选中 Item
 *
 * @type {() => _ItemClasses[]}
 * @since 0.1.0
 * @category Soil
 * @see getSelectedLayers
 * @example
 *
 * ```ts
 * const selectedItems = _.getSelectedItems();
 * // 注意：此方法始终返回数组，如果没有选中任何 Item，则返回空数组。
 * const newFolder = app.project.items.addFolder("New Folder");
 * _.forEach(selectedItems, function (item) {
 *     item.parentFolder = newFolder;
 * });
 * // 结果：选中的 Items 会被移动到新文件夹中去。
 * ```
 */
let getSelectedItems: () => _ItemClasses[] = createGetAppProperty<Array<_ItemClasses>>(["project", "selection"]);

export default getSelectedItems;
