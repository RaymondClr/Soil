function removeFileExt(fileName: string): string {
    return fileName.replace(/\.[^\.]+$/, "");
}

export default removeFileExt;
