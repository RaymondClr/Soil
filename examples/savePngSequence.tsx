import * as _ from "../soil-ts/soil";

const activeComp = _.getActiveComp();
// 注意：如果没有活动合成会返回 undefined
if (activeComp) {
    const outputPath = _.createPath(_.pathDesktop.fsName, "Sequence");
    _.savePngSequence(activeComp, outputPath, "image");
}
// 结果：活动合成工作区范围内的所有帧会被渲染至桌面 Sequence 文件夹中，序列使用 image 作为前缀。
