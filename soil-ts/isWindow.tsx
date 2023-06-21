import createIsNativeType from "./_internal/_createIsNativeType";

const isWindow = createIsNativeType<Window>(Window);

export default isWindow;
