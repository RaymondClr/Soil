function stringToBinary(string: string): string {
    const codePoint = string.charCodeAt(0);
    const binaryCode = codePoint.toString(2);
    return "0000000000000000".substring(binaryCode.length) + binaryCode;
}

export default stringToBinary;
