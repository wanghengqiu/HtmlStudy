/**
 * Created by Coder on 2018/4/25.
 */
function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    if (typeof arguments[0] !== "number")
    {
        throw 'no a number';
    }
    var x =arguments[0];
    return x>=0 ? x : -x;
}