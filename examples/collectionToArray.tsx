import * as _ from "../soil-ts";

const projectItems = app.project.items;
const itemsArr = _.collectionToArray(projectItems);
_.log(_.map(itemsArr, item => item.name));
// 结果：桌面日志记录项目中所有的 Item 名称。
