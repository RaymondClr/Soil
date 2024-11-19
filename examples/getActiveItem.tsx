import * as _ from "../soil-ts/soil";

const activeItem = _.getActiveItem();
// 注意：如果没有活动合成会返回 null
if (activeItem) {
    activeItem.label = 1;
}
// 结果：活动 Item 的标签色会被设置为红色。
