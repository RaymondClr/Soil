import { reSplitPrefsSection } from "./_global";

function splitPrefsSection(string: string): Array<string> {
    return string.split(reSplitPrefsSection as any);
}

export default splitPrefsSection;
