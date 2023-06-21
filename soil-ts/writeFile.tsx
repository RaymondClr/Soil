import castFile from "./_internal/_castFile";
import newFolder from "./_internal/_newFolder";

function writeFile(path: LooseFile, content: string, encoding: string = "utf-8", mode: string = "w"): boolean {
    let file = castFile(path);
    file.encoding = encoding;
    let fileFolder = newFolder(file.path);
    if (!fileFolder.exists) {
        fileFolder.create();
    }
    return file.open(mode) && file.write(content) && file.close();
}

export default writeFile;
