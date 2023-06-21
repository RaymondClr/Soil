import forEachRight from "./lodash/#forEachRight";
import getFiles from "./_internal/_getFiles";
import isFile from "./isFile";

function eachFilesRight<T extends LooseFolder>(folder: T, iteratee: (file: File, index: number, files: Array<Folder | File>) => boolean | void) {
    let resIndex = 0;
    forEachRight(getFiles(folder), (unknownFile, index, files) => {
        if (isFile(unknownFile)) {
            if (iteratee(unknownFile, resIndex++, files) === false) {
                return false;
            }
        }
    });
}

export default eachFilesRight;
