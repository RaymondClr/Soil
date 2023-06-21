import getActiveItem from "./getActiveItem.jsx";
import isCompItem from "./isCompItem.jsx";

function getActiveComp(): CompItem | undefined {
    let item = getActiveItem();
    return isCompItem(item) ? item : undefined;
}

export default getActiveComp;
