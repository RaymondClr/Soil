import * as _ from "../soil-ts";

const selectedLayer = _.getFirstSelectedLayer();

if (_.isRasterLayer(selectedLayer)) {
    _.times(3, () => {
        const newProperty = _.addPropertyAlone(selectedLayer, ["ADBE Effect Parade", "ADBE Checkbox Control"]);
        // 如果路径无效或不存在，会返回 undefined。
        if (newProperty) {
            _.log(newProperty.name);
        }
    });
}
// 结果：选中图层上会被添加 3 个“复选框控制”效果。桌面日志分别记录 3 个效果名称。
