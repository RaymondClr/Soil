import { nativeFloor } from "./lodash/basic/_global";

/**
 * 秒数转帧数
 *
 * @param {number} seconds
 * @param {number} frameRate
 * @returns {number}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function secondToFrames(seconds: number, frameRate: number): number {
    return nativeFloor(seconds * frameRate);
}

export default secondToFrames;
