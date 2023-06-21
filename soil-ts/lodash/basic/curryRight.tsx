import { nativeSlice } from "./_global";

function curryRight<T extends Array<any>, R>(func: (...args: T) => R): CurryRight<T, R> {
    const arity = func.length;
    return function curriedRight(...values: Array<any>): any {
        const args = nativeSlice.call(arguments);
        if (args.length >= arity) {
            return func.apply(null, args.slice(0, arity).reverse());
        }
        return function (...values: Array<any>) {
            return curriedRight.apply(null, args.concat(nativeSlice.call(arguments)));
        };
    } as CurryRight<T, R>;
}

export default curryRight;
