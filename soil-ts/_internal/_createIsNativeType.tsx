function createIsNativeType<T>(nativeObject: any): (value: any) => value is T {
    return (value: any): value is T => value != null && value instanceof nativeObject;
}

export default createIsNativeType;
