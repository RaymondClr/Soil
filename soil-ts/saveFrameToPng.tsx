import castFile from "./_internal/_castFile";

function saveFrameToPng(file: LooseFile, compItem: CompItem, time: number = compItem.time): void {
    compItem.saveFrameToPng(time, castFile(file));
}

export default saveFrameToPng;
