import map from "./lodash/#map";
import binaryToString from "./_internal/_binaryToString";
import decimalToHex from "./_internal/_decimalToHex";
import hexToBinary from "./_internal/_hexToBinary";

function encodeImageString(data: Array<number>): string {
    return map(map(map(data, decimalToHex), hexToBinary), binaryToString).join("");
}

export default encodeImageString;
