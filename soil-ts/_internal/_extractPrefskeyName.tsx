import { rePrefsKeyName } from "./_global";

function extractPrefskeyName(string: string): string {
    var result = "";
    string.replace(rePrefsKeyName, function (match, $1) {
        result = $1;
    });
    return result;
}

export default extractPrefskeyName;
