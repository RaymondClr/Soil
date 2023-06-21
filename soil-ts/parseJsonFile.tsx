import isString from "./lodash/#isString";
import parseJson from "./parseJson.jsx";
import readFile from "./readFile.jsx";

function parseJsonFile(path: LooseFile): any {
    const content = readFile(path);
    return isString(content) ? parseJson(content) : content;
}

export default parseJsonFile;
