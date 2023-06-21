import newFolder from "../_internal/_newFolder";
import isFolder from "../isFolder";

function castFolder(folder: LooseFolder): Folder {
    return isFolder(folder) ? folder : newFolder(folder);
}

export default castFolder;
