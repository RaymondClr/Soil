import get from "../lodash/#get";

function createGetAppProperty<T>(path: Array<PropertyName>) {
    return function (): T {
        return get(app, path);
    };
}

export default createGetAppProperty;
