// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/19 18:26:48
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    function getActiveItem() {
        return app.project.activeItem;
    }
    var activeItem = getActiveItem();
    if (activeItem) {
        activeItem.label = 1;
    }
}).call(this);
