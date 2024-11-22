import * as _ from "../soil-ts/soil";

const selectedProperty = _.getFirstSelectedProperty();
if (selectedProperty) {
    if (_.hasKeyframes(selectedProperty)) {
        const firstSelectedKeyTime = _.findKeyframeTime(selectedProperty, (property, keyIndex) => property.keySelected(keyIndex));
        alert(firstSelectedKeyTime);
    }
}
// 结果：弹窗会显示选中 Property 中第一个被选中的关键帧的时间。