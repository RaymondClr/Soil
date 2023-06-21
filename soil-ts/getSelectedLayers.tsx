import createGetAppProperty from "./_internal/_createGetAppProperty";

let getSelectedLayers = createGetAppProperty<Array<Layer> | undefined>(["project", "activeItem", "selectedLayers"]);

export default getSelectedLayers;
