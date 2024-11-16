import map from "./lodash/#map";
import times from "./lodash/#times";
import binaryToHex from "./_internal/_binaryToHex";
import HexToDecimal from "./_internal/_HexToDecimal";
import stringToBinary from "./_internal/_stringToBinary";

/**
 * 解码图像字二进制字符串
 *
 * @param {string} string
 * @returns {Array<number>}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function decodeImageString(string: string): Array<number> {
    const chars = times(string.length, index => string.charAt(index));
    return map(map(map(chars, stringToBinary), binaryToHex), HexToDecimal);
}

export default decodeImageString;
