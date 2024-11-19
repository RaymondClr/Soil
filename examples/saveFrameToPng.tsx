import * as _ from "../soil-ts/soil";

const activeComp = _.getActiveComp();
// 注意：如果没有活动合成会返回 undefined
if (activeComp) {
    const outputPath = _.createPath(_.pathDesktop.fsName, "frame.png");
    _.saveFrameToPng(outputPath, activeComp, 0);
}
// 结果：活动合成的第一帧会以名称 frame.png 被导出至桌面
