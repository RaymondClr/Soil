import { nativeFloor } from "./lodash/basic/_global";

/**
 * 秒数转帧数
 *
 * @param {number} seconds
 * @param {number} frameRate
 * @returns {number}
 * @since 0.1.0
 * @category Soil
 * @example
 *
 * ```ts
 * const activeComp = _.getActiveComp();
 * if (activeComp) {
 *     const second = activeComp.duration;
 *     const frameRate = activeComp.frameRate;
 *     const frames = _.secondToFrames(second, frameRate);
 *     alert(frames);
 * }
 * // 结果：弹窗内容显示当前活动合成总帧数。
 * ```
 */
function secondToFrames(seconds: number, frameRate: number): number {
    return nativeFloor(seconds * frameRate);
}

export default secondToFrames;
