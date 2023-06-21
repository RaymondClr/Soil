import eachFiles from "./eachFiles";

function filterFiles(folder: LooseFolder, predicate: (file: File, index: number, files: Array<Folder | File>) => boolean): Array<File> {
    const result: Array<File> = [];
    eachFiles(folder, (file, index, files) => {
        if (predicate(file, index, files)) {
            result.push(file);
        }
    });
    return result;
}

export default filterFiles;
