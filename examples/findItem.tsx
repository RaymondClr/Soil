import * as _ from "../soil-ts/soil";

const compItem = _.findItem(app.project, _.isCompItem);
if (compItem) {
    alert(compItem.name);
}
// 结果：如果项目中存在合成，那么弹窗会显示从上往下第一个合成的名称。
