import { reScriptFileName } from "./_internal/_global";

function isScriptFile(file: File): file is File {
    return reScriptFileName.test(file.displayName);
}

export default isScriptFile;
