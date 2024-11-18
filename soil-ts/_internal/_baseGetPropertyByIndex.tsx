function baseGetPropertyByIndex(value: EditableProperty, name: number): _PropertyClasses | null {
    return 0 < name && name <= value.numProperties ? value.property(name) : null;
}

export default baseGetPropertyByIndex;
