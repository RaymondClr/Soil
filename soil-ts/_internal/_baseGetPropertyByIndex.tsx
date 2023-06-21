function baseGetPropertyByIndex(value: EditableProperty, index: number): _PropertyClasses | null {
    return 0 < index && index <= value.numProperties ? value.property(index) : null;
}

export default baseGetPropertyByIndex;
