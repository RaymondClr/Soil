import eachFiles from "./eachFiles";

function mapFiles<T>(folder: LooseFolder, iteratee: (file: File, index: number, files: Array<Folder | File>) => T): Array<T> {
    const result: Array<T> = [];
    eachFiles(folder, (file, index, files) => {
        result[index] = iteratee(file, index, files);
    });
    return result;
}

export default mapFiles;
