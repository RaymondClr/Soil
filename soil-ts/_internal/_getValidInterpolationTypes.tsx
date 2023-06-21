import { PROPERTY_INTERPOLATION_TYPE } from "./_global";
import filter from "../lodash/#filter";

function getValidInterpolationTypes(property: Property) {
    return filter(PROPERTY_INTERPOLATION_TYPE, function (enumNumber): enumNumber is any {
        return property.isInterpolationTypeValid(enumNumber);
    });
}

export default getValidInterpolationTypes;
