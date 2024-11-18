import * as _ from "../soil-ts";

const projectItems = app.project.items;
const itemsArr = _.collectionToArray(projectItems);
_.log(_.map(itemsArr, (item) => item.name));
// 结果：桌面日志会记录项目中所有的 Item 名称。

const activeComp = _.getActiveComp();
if (_.isCompItem(activeComp)) {
    const layers = _.collectionToArray(activeComp.layers);
    _.each(layers, function (layer, index) {
        _.log(`${index + 1} ${layer.name}`);
    });
}
// 结果：桌面日志会记录活动合成中的所有图层名称。
