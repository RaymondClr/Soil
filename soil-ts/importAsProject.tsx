import importFile from "./importFile";

function importAsProject(file: LooseFile): _ItemClasses | null {
    return importFile(file, ImportAsType.PROJECT);
}

export default importAsProject;
