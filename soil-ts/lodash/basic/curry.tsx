import { nativeSlice } from "./_global";

function curry<T extends Array<any>, R>(func: (...args: T) => R): Curry<T, R> {
    const arity = func.length;
    return function curried(...values: Array<any>): any {
        const args = nativeSlice.call(arguments);
        if (args.length >= arity) {
            return func.apply(null, args.slice(0, arity));
        }
        return function (...values: Array<any>) {
            return curried.apply(null, args.concat(nativeSlice.call(arguments)));
        };
    } as Curry<T, R>;
}

export default curry;
