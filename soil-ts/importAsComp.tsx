import importFile from "./importFile";

function importAsComp(file: LooseFile, sequence: boolean): _ItemClasses | null {
    return importFile(file, ImportAsType.COMP, sequence);
}

export default importAsComp;
