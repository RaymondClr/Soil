import { nativeFloor } from "./lodash/basic/_global";

function secondToFrames(seconds: number, frameRate: number): number {
    return nativeFloor(seconds * frameRate);
}

export default secondToFrames;
