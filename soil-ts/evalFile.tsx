import castFile from "./_internal/_castFile";

function evalFile(path: LooseFile): any {
    const file = castFile(path);
    return $.evalFile(file.alias ? file.resolve() : file);
}

export default evalFile;
