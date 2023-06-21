import importFile from "./importFile";

function importAsFootage(file: LooseFile, sequence: boolean): _ItemClasses | null {
    return importFile(file, ImportAsType.FOOTAGE, sequence);
}

export default importAsFootage;
