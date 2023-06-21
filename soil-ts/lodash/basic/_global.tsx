export const arrayProto = Array.prototype;
export const objectProto = Object.prototype;

export const hasOwnProperty = objectProto.hasOwnProperty;
export const nativeConcat = arrayProto.concat;
export const nativeJoin = arrayProto.join;
export const nativePush = arrayProto.push;
export const nativeSlice = arrayProto.slice;
export const nativeToString = objectProto.toString;

export const nativeCeil = Math.ceil;
export const nativeFloor = Math.floor;
export const nativeMax = Math.max;
export const nativeMin = Math.min;
export const nativeRandom = Math.random;
export const nativeRound = Math.round;

export const nativeParseFloat = parseFloat;
export const nativeParseInt = parseInt;

/** Used as references for various `Number` constants. */
export const NAN = 0 / 0;
export const INFINITY = 1 / 0;

export const MAX_ARRAY_LENGTH = 4294967295;
export const MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1;
export const HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

export const MAX_INTEGER = 1.7976931348623157e308;
export const MAX_SAFE_INTEGER = 9007199254740991;

/** Used to match leading and trailing whitespace. */
export const reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
export const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
export const reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
export const reIsOctal = /^0o[0-7]+$/i;

/** Used to match leading and trailing whitespace. */
export const reTrimStart = /^\s+/;

/** Used to map characters to HTML entities. */
export const htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
};

/** Used to map HTML entities to characters. */
export const htmlUnescapes = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
};

/** Used to match HTML entities and HTML characters. */
export const reEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g;
export const reHasEscapedHtml = RegExp(reEscapedHtml.source);

/** Used to match HTML entities and HTML characters. */
export const reUnescapedHtml = /[&<>"']/g;
export const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
export const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
export const reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
// const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

export const reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used to match words composed of alphanumeric characters. */
export const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to detect if a method is native. */
export const reIsNative = /^\nfunction.*?\(\) \{\n    \[native code\]\n\}\n$/;
// export const reIsNative = RegExp(
//     `^${Function.prototype.toString
//         .call(Object.prototype.hasOwnProperty)
//         .replace(reRegExpChar, "\\$&")
//         .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}$`
// );

export const reQuotes = /['\u2019]/g;

export const reFlags = /\w*$/;

/** Used to match property names within property paths. */
export const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
export const reIsPlainProp = /^\w*$/;

export const charCodeOfDot = ".".charCodeAt(0);
export const reEscapeChar = /\\(\\)?/g;
export const rePropName = /[^.[\]]+|\[(?:([^"'][^[]*)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
// const rePropName = RegExp(
//     // Match anything that isn't a dot or bracket.
//     "[^.[\\]]+" +
//         "|" +
//         // Or match property names within brackets.
//         "\\[(?:" +
//         // Match a non-string expression.
//         "([^\"'][^[]*)" +
//         "|" +
//         // Or match strings (supports escaping characters).
//         "([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2" +
//         ")\\]" +
//         "|" +
//         // Or match "" as the space between consecutive dots or empty brackets.
//         "(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))",
//     "g"
// );

/** Used to compose unicode character classes. */
const rsAstralRange = "\\ud800-\\udfff";
const rsComboMarksRange = "\\u0300-\\u036f";
const reComboHalfMarksRange = "\\ufe20-\\ufe2f";
const rsComboSymbolsRange = "\\u20d0-\\u20ff";
const rsComboMarksExtendedRange = "\\u1ab0-\\u1aff";
const rsComboMarksSupplementRange = "\\u1dc0-\\u1dff";
const rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange;
const rsVarRange = "\\ufe0e\\ufe0f";

/** Used to compose unicode capture groups. */
const rsAstral = `[${rsAstralRange}]`;
const rsCombo = `[${rsComboRange}]`;
const rsFitz = "\\ud83c[\\udffb-\\udfff]";
const rsModifier = `(?:${rsCombo}|${rsFitz})`;
const rsNonAstral = `[^${rsAstralRange}]`;
const rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
const rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
const rsZWJ = "\\u200d";

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
export const reHasUnicode = RegExp(`[${rsZWJ + rsAstralRange + rsComboRange + rsVarRange}]`);

/** Used to detect unsigned integer values. */
export const reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to compose unicode regexes. */
const reOptMod = `${rsModifier}?`;
const rsOptVar = `[${rsVarRange}]?`;
const rsOptJoin = `(?:${rsZWJ}(?:${[rsNonAstral, rsRegional, rsSurrPair].join("|")})${rsOptVar + reOptMod})*`;
const rsSeq = rsOptVar + reOptMod + rsOptJoin;
const rsNonAstralCombo = `${rsNonAstral}${rsCombo}?`;
const rsSymbol = `(?:${[rsNonAstralCombo, rsCombo, rsRegional, rsSurrPair, rsAstral].join("|")})`;

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
export const reUnicode = RegExp(`${rsFitz}(?=${rsFitz})|${rsSymbol + rsSeq}`, "g");

const rsDingbatRange = "\\u2700-\\u27bf";
const rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
const rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
const rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
const rsPunctuationRange = "\\u2000-\\u206f";
const rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
const rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
const rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
const rsApos = "['\u2019]";
const rsBreak = `[${rsBreakRange}]`;
const rsDigit = "\\d";
const rsDingbat = `[${rsDingbatRange}]`;
const rsLower = `[${rsLowerRange}]`;
const rsMisc = `[^${rsAstralRange}${rsBreakRange + rsDigit + rsDingbatRange + rsLowerRange + rsUpperRange}]`;
const rsUpper = `[${rsUpperRange}]`;

/** Used to compose unicode regexes. */
const rsMiscLower = `(?:${rsLower}|${rsMisc})`;
const rsMiscUpper = `(?:${rsUpper}|${rsMisc})`;
const rsOptContrLower = `(?:${rsApos}(?:d|ll|m|re|s|t|ve))?`;
const rsOptContrUpper = `(?:${rsApos}(?:D|LL|M|RE|S|T|VE))?`;
const rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
const rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
const rsEmoji = `(?:${[rsDingbat, rsRegional, rsSurrPair].join("|")})${rsSeq}`;

export const reUnicodeWords = RegExp([`${rsUpper}?${rsLower}+${rsOptContrLower}(?=${[rsBreak, rsUpper, "$"].join("|")})`, `${rsMiscUpper}+${rsOptContrUpper}(?=${[rsBreak, rsUpper + rsMiscLower, "$"].join("|")})`, `${rsUpper}?${rsMiscLower}+${rsOptContrLower}`, `${rsUpper}+${rsOptContrUpper}`, rsOrdUpper, rsOrdLower, `${rsDigit}+`, rsEmoji].join("|"), "g");

/** Used to match Latin Unicode letters (excluding mathematical operators). */
export const reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
export const reComboMark = RegExp(rsCombo, "g");

export const deburredLetters = {
    // Latin-1 Supplement block.
    "\xc0": "A",
    "\xc1": "A",
    "\xc2": "A",
    "\xc3": "A",
    "\xc4": "A",
    "\xc5": "A",
    "\xe0": "a",
    "\xe1": "a",
    "\xe2": "a",
    "\xe3": "a",
    "\xe4": "a",
    "\xe5": "a",
    "\xc7": "C",
    "\xe7": "c",
    "\xd0": "D",
    "\xf0": "d",
    "\xc8": "E",
    "\xc9": "E",
    "\xca": "E",
    "\xcb": "E",
    "\xe8": "e",
    "\xe9": "e",
    "\xea": "e",
    "\xeb": "e",
    "\xcc": "I",
    "\xcd": "I",
    "\xce": "I",
    "\xcf": "I",
    "\xec": "i",
    "\xed": "i",
    "\xee": "i",
    "\xef": "i",
    "\xd1": "N",
    "\xf1": "n",
    "\xd2": "O",
    "\xd3": "O",
    "\xd4": "O",
    "\xd5": "O",
    "\xd6": "O",
    "\xd8": "O",
    "\xf2": "o",
    "\xf3": "o",
    "\xf4": "o",
    "\xf5": "o",
    "\xf6": "o",
    "\xf8": "o",
    "\xd9": "U",
    "\xda": "U",
    "\xdb": "U",
    "\xdc": "U",
    "\xf9": "u",
    "\xfa": "u",
    "\xfb": "u",
    "\xfc": "u",
    "\xdd": "Y",
    "\xfd": "y",
    "\xff": "y",
    "\xc6": "Ae",
    "\xe6": "ae",
    "\xde": "Th",
    "\xfe": "th",
    "\xdf": "ss",
    // Latin Extended-A block.
    "\u0100": "A",
    "\u0102": "A",
    "\u0104": "A",
    "\u0101": "a",
    "\u0103": "a",
    "\u0105": "a",
    "\u0106": "C",
    "\u0108": "C",
    "\u010a": "C",
    "\u010c": "C",
    "\u0107": "c",
    "\u0109": "c",
    "\u010b": "c",
    "\u010d": "c",
    "\u010e": "D",
    "\u0110": "D",
    "\u010f": "d",
    "\u0111": "d",
    "\u0112": "E",
    "\u0114": "E",
    "\u0116": "E",
    "\u0118": "E",
    "\u011a": "E",
    "\u0113": "e",
    "\u0115": "e",
    "\u0117": "e",
    "\u0119": "e",
    "\u011b": "e",
    "\u011c": "G",
    "\u011e": "G",
    "\u0120": "G",
    "\u0122": "G",
    "\u011d": "g",
    "\u011f": "g",
    "\u0121": "g",
    "\u0123": "g",
    "\u0124": "H",
    "\u0126": "H",
    "\u0125": "h",
    "\u0127": "h",
    "\u0128": "I",
    "\u012a": "I",
    "\u012c": "I",
    "\u012e": "I",
    "\u0130": "I",
    "\u0129": "i",
    "\u012b": "i",
    "\u012d": "i",
    "\u012f": "i",
    "\u0131": "i",
    "\u0134": "J",
    "\u0135": "j",
    "\u0136": "K",
    "\u0137": "k",
    "\u0138": "k",
    "\u0139": "L",
    "\u013b": "L",
    "\u013d": "L",
    "\u013f": "L",
    "\u0141": "L",
    "\u013a": "l",
    "\u013c": "l",
    "\u013e": "l",
    "\u0140": "l",
    "\u0142": "l",
    "\u0143": "N",
    "\u0145": "N",
    "\u0147": "N",
    "\u014a": "N",
    "\u0144": "n",
    "\u0146": "n",
    "\u0148": "n",
    "\u014b": "n",
    "\u014c": "O",
    "\u014e": "O",
    "\u0150": "O",
    "\u014d": "o",
    "\u014f": "o",
    "\u0151": "o",
    "\u0154": "R",
    "\u0156": "R",
    "\u0158": "R",
    "\u0155": "r",
    "\u0157": "r",
    "\u0159": "r",
    "\u015a": "S",
    "\u015c": "S",
    "\u015e": "S",
    "\u0160": "S",
    "\u015b": "s",
    "\u015d": "s",
    "\u015f": "s",
    "\u0161": "s",
    "\u0162": "T",
    "\u0164": "T",
    "\u0166": "T",
    "\u0163": "t",
    "\u0165": "t",
    "\u0167": "t",
    "\u0168": "U",
    "\u016a": "U",
    "\u016c": "U",
    "\u016e": "U",
    "\u0170": "U",
    "\u0172": "U",
    "\u0169": "u",
    "\u016b": "u",
    "\u016d": "u",
    "\u016f": "u",
    "\u0171": "u",
    "\u0173": "u",
    "\u0174": "W",
    "\u0175": "w",
    "\u0176": "Y",
    "\u0177": "y",
    "\u0178": "Y",
    "\u0179": "Z",
    "\u017b": "Z",
    "\u017d": "Z",
    "\u017a": "z",
    "\u017c": "z",
    "\u017e": "z",
    "\u0132": "IJ",
    "\u0133": "ij",
    "\u0152": "Oe",
    "\u0153": "oe",
    "\u0149": "'n",
    "\u017f": "s",
};
