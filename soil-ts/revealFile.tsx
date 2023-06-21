import castFile from "./_internal/_castFile";
import castFolder from "./_internal/_castFolder";

function revealFile(value: LooseFile): boolean {
    const file = castFile(value);
    if (!file.exists) {
        return false;
    }
    const folder = castFolder(file.path);
    return folder.execute();
}

export default revealFile;
