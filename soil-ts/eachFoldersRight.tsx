import forEachRight from "./lodash/#forEachRight";
import getFiles from "./_internal/_getFiles";
import isFolder from "./isFolder";

function eachFoldersRight<T extends LooseFolder>(folder: T, iteratee: (file: Folder, index: number, files: Array<Folder | File>) => boolean | void) {
    let resIndex = 0;
    forEachRight(getFiles(folder), (unknownFile, index, files) => {
        if (isFolder(unknownFile)) {
            if (iteratee(unknownFile, resIndex++, files) === false) {
                return false;
            }
        }
    });
}

export default eachFoldersRight;
