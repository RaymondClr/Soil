import * as _ from "soil-ts";

let activeItem = _.getActiveComp();

if (activeItem) {
    alert(activeItem.name);
}
