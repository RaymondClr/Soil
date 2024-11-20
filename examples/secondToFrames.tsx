import * as _ from "../soil-ts/soil";

const activeComp = _.getActiveComp();
if (activeComp) {
    const second = activeComp.duration;
    const frameRate = activeComp.frameRate;
    const frames = _.secondToFrames(second, frameRate);
    alert(frames);
}
// 结果：弹窗内容显示当前活动合成总帧数。
