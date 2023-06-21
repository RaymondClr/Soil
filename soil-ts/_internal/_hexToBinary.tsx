import padStart from "../lodash/#padStart";

function hexToBinary(hex: string): string {
    const binaryCode = parseInt(hex, 16).toString(2);
    return padStart(binaryCode, 8, "0");
}

export default hexToBinary;
