import * as _ from "../soil-ts/soil";

const selectedProperties = _.getSelectedProperties();
// 注意：如果没有活动合成会返回 undefined
if (selectedProperties) {
    const keysProperties = _.filter(selectedProperties, _.hasKeyframes);
    // 注意：由于 Property 的关键被移除后，所有其它 Property 的选中状态会被释放，所以需要缓存关键帧索引。
    const keyIndexesGroup = _.map(keysProperties, (property) => property.selectedKeys);
    _.forEach(keysProperties, function (property, index) {
        if (_.hasKeyframes(property)) {
            const keyIndexes = keyIndexesGroup[index];
            _.removeKeyframesBy(property, function (keyIndex) {
                return _.contains(keyIndexes, keyIndex);
            });
        }
    });
}
// 结果：选中的 Property 中，所有选中的关键帧都会被移除。
