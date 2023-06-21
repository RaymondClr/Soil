import forEach from "./lodash/#forEach";
import padStart from "./lodash/#padStart";
import times from "./lodash/#times";
import castFolder from "./_internal/_castFolder";
import createPath from "./createPath";
import saveFrameToPng from "./saveFrameToPng";
import secondToFrames from "./secondToFrames";
import templateString from "./templateString";

function savePngSequence(compItem: CompItem, outputPath: LooseFolder, suffix: string = compItem.name) {
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
        return new File(createPath(folderPath, templateString("${0}_${1}.png", suffix, sequenceNumber)));
    });
    forEach(files, function (file, index) {
        saveFrameToPng(file, compItem, index * frameDuration);
    });
}

export default savePngSequence;
