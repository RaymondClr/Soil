import map from "./lodash/#map";
import zipObject from "./lodash/#zipObject";
import extractPrefskeyName from "./_internal/_extractPrefskeyName";
import partitionPrefsPairs from "./_internal/_partitionPrefsPairs";
import splitPrefsPairs from "./_internal/_splitPrefsPairs";
import splitPrefsSection from "./_internal/_splitPrefsSection";
import trimPrefsBlankChar from "./_internal/_trimPrefsBlankChar";
import readFile from "./readFile";

function parsePrefs(path: LooseFile): { [x: string]: { [x: string]: string } } {
    const splitSection = splitPrefsSection(readFile(path) as string);
    const groupedSection = partitionPrefsPairs(splitSection);
    const section = map(groupedSection[0], extractPrefskeyName);
    const pairs = map(map(groupedSection[1], splitPrefsPairs), function (values) {
        const groupedPairs = partitionPrefsPairs(values);
        const keys = map(groupedPairs[0], extractPrefskeyName);
        return zipObject(keys, map(groupedPairs[1], trimPrefsBlankChar));
    });
    return zipObject(section, pairs);
}

export default parsePrefs;
