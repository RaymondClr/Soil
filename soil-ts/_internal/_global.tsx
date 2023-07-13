export const pathAppData = Folder.appData;
export const pathAppPackage = Folder.appPackage;
export const pathCommonFiles = Folder.commonFiles;
export const pathCurrent = Folder.current;
export const pathDesktop = Folder.desktop;
export const pathFs = Folder.fs;
export const pathMyDocuments = Folder.myDocuments;
export const pathScript = $.fileName;
export const pathStartup = Folder.startup;
export const pathSystem = Folder.system;
export const pathTemp = Folder.temp;
export const pathTrash = Folder.trash;
export const pathUserData = Folder.userData;

export const IS_KEY_LABEL_EXISTS = parseFloat(app.version) > 22.5;
export const PROPERTY_INTERPOLATION_TYPE = [6612 /* KeyframeInterpolationType.LINEAR */, 6613 /* KeyframeInterpolationType.BEZIER */, 6614 /* KeyframeInterpolationType.HOLD */] as const;

export const reScriptFileName = /\.(js|jsx|jsxbin)$/i;
export const rePrefsKeyName = /"([^"]+?)"/;
export const reSplitPrefsBlock = /^\s*?"([^"]*?)"\s*?=\s*?\s*/gm;
export const reSplitPrefsSection = /^\["([^\]]+)"\][^"]/gm;

export const reTemplateString = /\$\{(\d+)\}/g;
export const jsonEscapes = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", "\v": "\\v", '"': '\\"', "\\": "\\\\" };
export const reEscapedJson = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
export const reHasEscapedJson = new RegExp(reEscapedJson.source);
