function parseJson(string: string): any {
    try {
        return Function("", "return (" + string + ")")();
    } catch (error) {
        return null;
    }
}

export default parseJson;
