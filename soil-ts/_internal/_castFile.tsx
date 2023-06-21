import isFile from "../isFile";
import newFile from "./_newFile";

function castFile(file: LooseFile): File {
    return isFile(file) ? file : newFile(file);
}

export default castFile;
