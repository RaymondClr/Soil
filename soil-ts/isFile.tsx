import createIsNativeType from "./_internal/_createIsNativeType";

const isFile = createIsNativeType<File>(File);

export default isFile;
