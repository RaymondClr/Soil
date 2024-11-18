import * as _ from "../soil-ts/soil";

const selectedProperty = _.getFirstSelectedProperty();
if (_.isProperty(selectedProperty)) {
    _.log(`${selectedProperty.propertyIndex} | ${selectedProperty.name} | ${selectedProperty.matchName}`);
}
// 结果：桌面日志会记录选中 Property 的名称和其对应的匹配名。
