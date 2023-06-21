import castFolder from "./_internal/_castFolder";

function revealFolder(value: LooseFolder): boolean {
    const newFolder = castFolder(value);
    return newFolder.exists ? newFolder.execute() : false;
}

export default revealFolder;
