function decimalToHex(decimal: number): string {
    const hexCode = decimal.toString(16).toUpperCase();
    return "00".substring(hexCode.length) + hexCode;
}

export default decimalToHex;
