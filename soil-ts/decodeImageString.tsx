import map from "./lodash/#map";
import times from "./lodash/#times";
import binaryToHex from "./_internal/_binaryToHex";
import HexToDecimal from "./_internal/_HexToDecimal";
import stringToBinary from "./_internal/_stringToBinary";

function decodeImageString(string: string): Array<number> {
    const chars = times(string.length, index => string.charAt(index));
    return map(map(map(chars, stringToBinary), binaryToHex), HexToDecimal);
}

export default decodeImageString;
