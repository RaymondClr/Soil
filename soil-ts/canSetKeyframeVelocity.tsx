import isHoldInterpolationTypeOnly from "./_internal/_isHoldInterpolationTypeOnly";

/**
 * Property 关键帧可设置速率谓词
 *
 * @param {Property} property
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function canSetKeyframeVelocity(property: Property): boolean {
    return !isHoldInterpolationTypeOnly(property);
}

export default canSetKeyframeVelocity;
