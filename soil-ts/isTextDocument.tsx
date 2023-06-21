import createIsNativeType from "./_internal/_createIsNativeType";

const isTextDocument = createIsNativeType<TextDocument>(TextDocument);

export default isTextDocument;
