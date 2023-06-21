import executeCommand from "./executeCommand";

function revealPreferences(): void {
    executeCommand(parseFloat(app.version) > 16.0 ? 3131 : 2359);
}

export default revealPreferences;
