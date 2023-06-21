let idCounter = 0;

function uniqueId(prefix: string): string {
    let id = ++idCounter;
    return prefix + id;
}

export default uniqueId;
