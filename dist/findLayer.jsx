// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/21 11:32:37
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    function createIsNativeType(nativeObject) {
        return function(value) {
            return value != null && value instanceof nativeObject;
        };
    }
    var isCompItem = createIsNativeType(CompItem);
    function findLayer(comp, iteratee) {
        var index = 0;
        var length = comp.numLayers + 1;
        var layers = comp.layers;
        while (++index < length) {
            var layer = layers[index];
            if (iteratee(layer, index, comp)) {
                return layer;
            }
        }
    }
    function getActiveItem() {
        return app.project.activeItem;
    }
    function getActiveComp() {
        var item = getActiveItem();
        return isCompItem(item) ? item : undefined;
    }
    var isShapeLayer = createIsNativeType(ShapeLayer);
    var activeComp = getActiveComp();
    if (isCompItem(activeComp)) {
        var shapeLayer = findLayer(activeComp, isShapeLayer);
        if (shapeLayer) {
            alert(shapeLayer.name);
        }
    }
}).call(this);
