function setUndoGroup(undoString: string, func: (...args: Array<any>) => void) {
    app.beginUndoGroup(undoString);
    func();
    app.endUndoGroup();
}

export default setUndoGroup;
