import stringify from "./stringify";
import writeFile from "./writeFile";

function writeJson(path: LooseFile, object: object, indent: string | number = 4): boolean {
    return writeFile(path, stringify(object, indent));
}

export default writeJson;
