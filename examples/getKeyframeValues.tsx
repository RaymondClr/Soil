import * as _ from "../soil-ts/soil";

const activeComp = _.getActiveComp();
if (_.isCompItem(activeComp)) {
    const selectedProperty = activeComp.selectedProperties[0];
    if (_.canSetPropertyValue(selectedProperty)) {
        // 注意：keyLabel 方法在 Ae 22.6 中添加。
        const redKeys = _.getKeyframeValues(selectedProperty, function (property, keyIndex) {
            return property.keyLabel(keyIndex) === 1;
        });
        _.logJson(redKeys);
    }
}
// 结果：桌面 json 日志会记录所有被过滤的红色关键帧的值。
