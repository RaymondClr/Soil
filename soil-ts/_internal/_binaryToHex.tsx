function binaryToHex(binary: string): string {
    const decimalCode = parseInt(binary, 2);
    const hexCode = decimalCode.toString(16).toUpperCase();
    return "00".substring(hexCode.length) + hexCode;
}

export default binaryToHex;
