/**
 * 获取活动的 Item
 *
 * @returns {(_ItemClasses | null)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function getActiveItem(): _ItemClasses | null {
    return app.project.activeItem;
}

export default getActiveItem;
