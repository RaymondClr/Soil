import map from "./lodash/#map";
import charToHex from "./_internal/_charToHex";
import HexToDecimal from "./_internal/_HexToDecimal";

/**
 * 解码首选项文件中的数据块
 *
 * @param {string} string
 * @returns {Array<number>}
 * @since 0.1.0
 * @category Soil
 * @see parsePrefs
 * @example
 *
 * ```ts
 * // 将 AE 的 Adobe After Effects xx Prefs-indep-composition 配置文件中的 "Composition Settings6" 数据块解析为明文数据。该条数据为 AE 退出时自动保存的新建合成窗口中的数据。
 * var compositionSettings6 =
 *     '00000000000000000000"u0"00000BB50000000000000BB503090309001DF8"R"0000000A0000000B\
 * 0001000100000000B4000000"h"01000000000000"h"010000000000800000001000000000000000\
 * 00';
 * _.log(_.decodePrefs(compositionSettings6));
 * // 桌面日志记录 [0, 0, 0, 0, 0, 30000, 0, 2997, 0, 0, 0, 2997, 777, 777, 29, 63570, 0, 10, 0, 11, 1, 1, 0, 0, 46080, 0, 26625, 0, 0, 0, 26625, 0, 0, 128, 0, 16, 0, 0, 0, 0]
 * ```
 */
function decodePrefs(string: string): Array<number> {
    const hexString = string.replace(/\n/g, "").replace(/"([^"]+)"/g, function (match, $1) {
        return map($1.split(""), charToHex).join("");
    });
    const dataBlock = hexString.match(/([\W\w]{4})/g);
    return dataBlock === null ? [] : map(dataBlock, HexToDecimal);
}

export default decodePrefs;
