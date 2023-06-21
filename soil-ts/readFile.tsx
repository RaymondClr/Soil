import castFile from "./_internal/_castFile";

function readFile(path: LooseFile, encoding: string = "utf-8"): string | null {
    const file = castFile(path);
    if (!file.exists) {
        return null;
    }
    file.encoding = encoding;
    file.open("r");
    const contents = file.read();
    file.close();
    return contents;
}

export default readFile;
