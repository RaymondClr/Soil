function swapObjectValue(object: AnyObject, prop1: string, prop2: string) {
    const prev = object[prop1];
    const next = object[prop2];
    object[prop1] = next;
    object[prop2] = prev;
}

export default swapObjectValue;
