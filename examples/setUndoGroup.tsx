import * as _ from "../soil-ts/soil";

const activeComp = _.getActiveComp();
if (activeComp) {
    _.setUndoGroup("New Text Layer", function () {
        activeComp.layers.addText("After Effects");
    });
}
// 结果：活动合成会被添加一个文本图层，使用 Ctrl + Z 可以撤销图层创建。
