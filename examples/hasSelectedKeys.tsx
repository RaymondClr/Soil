import * as _ from "../soil-ts/soil";

const selectedProperty = _.getFirstSelectedProperty();
// 注意：如果没有活动合成会返回 undefined
if (selectedProperty) {
    if (_.hasSelectedKeys(selectedProperty)) {
        const selectedKeys = selectedProperty.selectedKeys;
        _.removeKeyframesBy(selectedProperty, function (property, keyIndex) {
            return _.contains(selectedKeys, keyIndex);
        });
    }
}
// 结果：选中 Property 存在关键帧的前提下，所有选中的关键帧都会被移除。
