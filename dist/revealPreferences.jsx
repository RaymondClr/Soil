// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/20 22:08:38
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    function executeCommand(id) {
        app.executeCommand(id);
    }
    function revealPreferences() {
        executeCommand(parseFloat(app.version) > 16.0 ? 3131 : 2359);
    }
    revealPreferences();
}).call(this);
