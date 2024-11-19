import * as _ from "../soil-ts/soil";

const selectedProperties = _.getSelectedProperties();
// 注意：如果没有活动合成会返回 undefined
if (selectedProperties) {
    _.forEach(selectedProperties, function (property) {
        if (_.hasKeyframes(property)) {
            _.removeKeyframes(property);
        }
    });
}
// 结果：选中的 Property 中，所有存在关键帧的 Porperty，关键帧都会被移除。
