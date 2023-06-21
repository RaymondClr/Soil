function compose<T1, T2>(f1: Func<T1, T2>): Func<T1, T2>;
function compose<T1, T2, T3>(f1: Func<T1, T2>, f2: Func<T2, T3>): Func<T1, T3>;
function compose<T1, T2, T3, T4>(f1: Func<T1, T2>, f2: Func<T2, T3>, f3: Func<T3, T4>): Func<T1, T4>;
function compose(...funcs: Array<(...args: Array<any>) => any>): (...args: Array<any>) => any {
    const args = arguments;
    const start = args.length - 1;
    return function (this: any) {
        var index = start;
        var result = args[start].apply(null, arguments);
        while (index--) {
            result = args[index].call(null, result);
        }
        return result;
    };
}

export default compose;
