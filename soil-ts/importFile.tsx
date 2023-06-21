import castFile from "./_internal/_castFile";

function importFile(path: LooseFile, importType: ImportAsType, sequence: boolean = false): null | _ItemClasses {
    const file = castFile(path);
    const options = new ImportOptions(file);
    if (!options.canImportAs(importType)) {
        return null;
    }
    options.importAs = importType;
    options.sequence = sequence;
    return app.project.importFile(options);
}

export default importFile;
