import * as _ from "../soil-ts/soil";

const selectedProperty = _.getFirstSelectedProperty();
// 注意：如果没有活动合成会返回 undefined
if (selectedProperty) {
    if (_.hasKeyframes(selectedProperty)) {
        _.eachKeyframeIndexes(selectedProperty, function (property, keyIndex) {
            _.log(property.keyTime);
        });
    }
}
// 结果：桌面日志会记录选中 Property 上的所有关键帧的时间。
