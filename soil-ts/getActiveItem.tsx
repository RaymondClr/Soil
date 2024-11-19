/**
 * 获取活动的 Item
 *
 * @returns {(_ItemClasses | null)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 *
 * ```ts
 * const activeItem = _.getActiveItem();
 * // 注意：如果没有活动合成会返回 null
 * if (activeItem) {
 *     activeItem.label = 1;
 * }
 * // 结果：活动 Item 的标签色会被设置为红色。
 * ```
 */
function getActiveItem(): _ItemClasses | null {
    return app.project.activeItem;
}

export default getActiveItem;
