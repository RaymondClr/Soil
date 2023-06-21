import forEach from "./lodash/#forEach";
import getFiles from "./_internal/_getFiles";
import isFile from "./isFile";

function eachFiles<T extends LooseFolder>(folder: T, iteratee: (file: File, index: number, files: Array<Folder | File>) => boolean | void) {
    let resIndex = 0;
    forEach(getFiles(folder), (unknownFile, index, files) => {
        if (isFile(unknownFile)) {
            if (iteratee(unknownFile, resIndex++, files) === false) {
                return false;
            }
        }
    });
}

export default eachFiles;
