import readFile from "./readFile";

function fileToBinary(file: LooseFile): string {
    const content = readFile(file, "binary");
    return content === null ? "" : content.toSource();
}

export default fileToBinary;
