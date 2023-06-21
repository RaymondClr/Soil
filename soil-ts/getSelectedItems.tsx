import createGetAppProperty from "./_internal/_createGetAppProperty";

let getSelectedItems = createGetAppProperty<Array<_ItemClasses>>(["project", "selection"]);

export default getSelectedItems;
