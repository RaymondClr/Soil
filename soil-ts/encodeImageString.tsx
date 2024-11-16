import map from "./lodash/#map";
import binaryToString from "./_internal/_binaryToString";
import decimalToHex from "./_internal/_decimalToHex";
import hexToBinary from "./_internal/_hexToBinary";

/**
 * 将数据源编码为图像二进制字符串
 *
 * @param {Array<number>} data
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function encodeImageString(data: Array<number>): string {
    return map(map(map(data, decimalToHex), hexToBinary), binaryToString).join("");
}

export default encodeImageString;
