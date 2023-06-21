import castFolder from "./_castFolder";

function getFiles(path: LooseFolder, mask?: any): Array<File | Folder> {
    const folder = castFolder(path);
    if (!folder.exists) {
        return [];
    }
    return folder.getFiles(mask);
}

export default getFiles;
