function binaryToString(binary: string): string {
    const decimalCode = parseInt(binary, 2);
    return String.fromCharCode(decimalCode);
}

export default binaryToString;
