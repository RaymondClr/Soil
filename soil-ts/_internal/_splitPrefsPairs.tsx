import { reSplitPrefsBlock } from "./_global";

function splitPrefsPairs(string: string): Array<string> {
    return string.split(reSplitPrefsBlock as any);
}

export default splitPrefsPairs;
