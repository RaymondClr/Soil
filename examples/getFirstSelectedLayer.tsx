import * as _ from "../soil-ts";

const selectedLayer = _.getFirstSelectedLayer();
if (_.isTextLayer(selectedLayer)) {
    alert(selectedLayer.name);
}
// 结果：在选中文本图层的前提下，会弹窗显示图层名称。
