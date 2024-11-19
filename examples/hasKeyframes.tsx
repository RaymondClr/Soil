import * as _ from "../soil-ts/soil";

const selectedProperty = _.getFirstSelectedProperty();
// 注意：如果没有活动合成会返回 undefined
if (selectedProperty) {
    if (_.hasKeyframes(selectedProperty)) {
        const keys = _.getKeyframeValues(selectedProperty);
        const offsetKeys = _.map(keys, function (key) {
            key.keyTime += 0.1;
            return key;
        });
        _.removeKeyframes(selectedProperty);
        _.setKeyframeValues(selectedProperty, offsetKeys);
    }
}
// 结果：在选中的 Property 存在关键帧的前提下，所有关键帧会向右偏移 0.1 秒。
