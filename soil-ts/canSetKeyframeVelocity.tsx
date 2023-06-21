import isHoldInterpolationTypeOnly from "./_internal/_isHoldInterpolationTypeOnly";

function canSetKeyframeVelocity(property: Property): boolean {
    return !isHoldInterpolationTypeOnly(property);
}

export default canSetKeyframeVelocity;
