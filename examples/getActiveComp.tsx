import * as _ from "../soil-ts/soil";

const activeComp = _.getActiveComp();
// 注意：如果没有活动合成会返回 undefined
if (activeComp) {
    activeComp.duration = 10;
}
// 结果：活动合成的持续时间会被设置为 10 秒。
