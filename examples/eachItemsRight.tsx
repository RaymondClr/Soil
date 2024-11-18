import * as _ from "../soil-ts";

_.eachItemsRight(app.project, function (item) {
    item.remove();
});
// 结果：项目中的所有 Item 都会被删除。
