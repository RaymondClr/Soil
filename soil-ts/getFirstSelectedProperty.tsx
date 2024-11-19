import createGetAppProperty from "./_internal/_createGetAppProperty";

/**
 * 获取首个选中的 Property
 *
 * @type {() => _PropertyClasses | undefined}
 * @since 0.1.0
 * @category Soil
 * @see getSelectedProperties
 * @example
 *
 * ```ts
 * const selectedProperty = _.getFirstSelectedProperty();
 * if (_.isProperty(selectedProperty)) {
 *     _.log(`${selectedProperty.propertyIndex} | ${selectedProperty.name} | ${selectedProperty.matchName}`);
 * }
 * // 结果：桌面日志会记录选中 Property 的名称和其对应的匹配名。
 * ```
 */
let getFirstSelectedProperty: () => _PropertyClasses | undefined = createGetAppProperty<_PropertyClasses | undefined>(["project", "activeItem", "selectedProperties", "0"]);

export default getFirstSelectedProperty;
