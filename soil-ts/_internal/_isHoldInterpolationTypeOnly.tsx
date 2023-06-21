import getValidInterpolationTypes from "./_getValidInterpolationTypes";

function isHoldInterpolationTypeOnly(property: Property) {
    const validInterpolationTypes = getValidInterpolationTypes(property);
    return validInterpolationTypes.length === 1 && validInterpolationTypes[0] === KeyframeInterpolationType.HOLD;
}

export default isHoldInterpolationTypeOnly;
