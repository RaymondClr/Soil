import castFile from "./_internal/_castFile";

function moveFile(path: LooseFile, newPath: string): boolean {
    const file = castFile(path);
    return file.exists ? false : file.rename(newPath);
}

export default moveFile;
