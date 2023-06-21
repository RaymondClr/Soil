function trimString(string: string): string {
    return string.replace(/^\s+/, "").replace(/\s+$/, "");
}

export default trimString;
