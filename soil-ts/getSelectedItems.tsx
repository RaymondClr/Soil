import createGetAppProperty from "./_internal/_createGetAppProperty";

/**
 * 获取选中 Item
 *
 * @type {() => _ItemClasses[]}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
let getSelectedItems: () => _ItemClasses[] = createGetAppProperty<Array<_ItemClasses>>(["project", "selection"]);

export default getSelectedItems;
