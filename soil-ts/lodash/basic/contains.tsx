function contains(array: Array<any>, value: any): boolean {
    let index = -1;
    const length = array.length;

    while (++index < length) {
        if (array[index] === value) {
            return true;
        }
    }
    return false;
}

export default contains;
