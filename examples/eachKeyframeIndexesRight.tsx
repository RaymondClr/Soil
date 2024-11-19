import * as _ from "../soil-ts/soil";

const selectedProperty = _.getFirstSelectedProperty();
// 注意：如果没有活动合成会返回 undefined
if (selectedProperty) {
    if (_.hasKeyframes(selectedProperty)) {
        _.eachKeyframeIndexesRight(selectedProperty, function (property, keyIndex) {
            property.removeKey(keyIndex);
        });
    }
}
// 结果：选中 Property 上的所有关键帧都会被移除。
