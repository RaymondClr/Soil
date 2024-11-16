import forEach from "./lodash/#forEach";
import padStart from "./lodash/#padStart";
import times from "./lodash/#times";
import castFolder from "./_internal/_castFolder";
import createPath from "./createPath";
import saveFrameToPng from "./saveFrameToPng";
import secondToFrames from "./secondToFrames";
import templateString from "./templateString";

/**
 * 将合成帧保存为 PNG 序列
 *
 * @param {CompItem} compItem
 * @param {LooseFolder} outputPath
 * @param {string} [prefix=compItem.name]
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function savePngSequence(compItem: CompItem, outputPath: LooseFolder, prefix: string = compItem.name) {
    const folder = castFolder(outputPath);
    if (!folder.exists) {
        folder.create();
    }
    const folderPath = folder.fsName;
    const frameRate = compItem.frameRate;
    const start = secondToFrames(compItem.workAreaStart, frameRate);
    const duraion = secondToFrames(compItem.workAreaDuration, frameRate);
    const frameDigtis = String(duraion).length;
    const frameDuration = compItem.frameDuration;
    const files = times(duraion, function (index) {
        const sequenceNumber = padStart(String(start + index), frameDigtis, "0");
        return new File(createPath(folderPath, templateString("${0}_${1}.png", prefix, sequenceNumber)));
    });
    forEach(files, function (file, index) {
        saveFrameToPng(file, compItem, index * frameDuration);
    });
}

export default savePngSequence;
