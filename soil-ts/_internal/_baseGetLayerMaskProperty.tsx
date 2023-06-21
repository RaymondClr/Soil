function baseGetLayerMaskProperty(layer: RasterLayer): PropertyGroup {
    return layer.property("ADBE Mask Parade") as PropertyGroup;
}

export default baseGetLayerMaskProperty;
