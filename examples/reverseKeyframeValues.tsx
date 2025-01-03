import * as _ from "../soil-ts/soil";

const selectedProperties = _.getSelectedProperties();
// 注意：如果没有活动合成会返回 undefined
if (selectedProperties) {
    _.forEach(selectedProperties, function (property) {
        if (_.hasKeyframes(property)) {
            const keyframes = _.getKeyframeValues(property);
            const reversedKeys = _.reverseKeyframeValues(keyframes, false);
            _.setUndoGroup("Reverse Keyframe", function () {
                _.removeKeyframes(property);
                _.setKeyframeValues(property, reversedKeys);
            });
        }
    });
}
// 结果：选中的 Property 中，所有存在关键帧的 Porperty，关键帧属性会被反转。
