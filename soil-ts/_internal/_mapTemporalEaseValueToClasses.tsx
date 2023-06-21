import map from "../lodash/#map";

function mapTemporalEaseValueToClasses(keyTemporalEaseValue: Array<KeyframeEase>): [KeyframeEase] {
    return map(keyTemporalEaseValue, keyframeEase => {
        const speed = keyframeEase.speed;
        const influence = keyframeEase.influence;
        return new KeyframeEase(speed, influence === 0 ? 0.1 : influence);
    }) as [KeyframeEase];
}

export default mapTemporalEaseValueToClasses;
