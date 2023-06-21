import removeFileExt from "./removeFileExt";

function getPlainFileName(file: File): string {
    return removeFileExt(file.displayName);
}

export default getPlainFileName;
