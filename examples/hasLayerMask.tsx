import * as _ from "../soil-ts";

const selectedLayer = _.getFirstSelectedLayer();
if (_.hasLayerMask(selectedLayer)) {
    const maskProperty = selectedLayer.mask;
    _.eachPropertiesRight(maskProperty, function (property) {
        property.remove();
    });
}
// 结果：选中图层存在 Mask 的前提下，所有 Mask 都会被移除。
