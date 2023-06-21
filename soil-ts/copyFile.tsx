import castFile from "./_internal/_castFile";

function copyFile(sourceFile: LooseFile, newPath: LooseFile): boolean {
    const source = castFile(sourceFile);
    if (!source.exists) {
        return false;
    }
    const target = castFile(newPath);
    if (source.fullName === target.fullName) {
        return false;
    }
    return source.copy(target.fsName);
}

export default copyFile;
