import importFile from "./importFile";

function importAsCroppedLayers(file: LooseFile, sequence: boolean): _ItemClasses | null {
    return importFile(file, ImportAsType.COMP_CROPPED_LAYERS, sequence);
}

export default importAsCroppedLayers;
