import map from "./lodash/#map";
import charToHex from "./_internal/_charToHex";
import HexToDecimal from "./_internal/_HexToDecimal";

function decodePrefs(string: string): Array<number> {
    const hexString = string.replace(/\n/g, "").replace(/"([^"]+)"/g, function (match, $1) {
        return map($1.split(""), charToHex).join("");
    });
    const dataBlock = hexString.match(/([\W\w]{4})/g);
    return dataBlock === null ? [] : map(dataBlock, HexToDecimal);
}

export default decodePrefs;
