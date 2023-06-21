import createGetAppProperty from "./_internal/_createGetAppProperty";

let getFirstSelectedLayer = createGetAppProperty<Layer | undefined>(["project", "activeItem", "selectedLayers", "0"]);

export default getFirstSelectedLayer;
