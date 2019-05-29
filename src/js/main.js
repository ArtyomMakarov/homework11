module.exports = makeCurry;
function makeCurry(a) {
    var currentSum = a;
    function f(b) {
        if (b === undefined) {
            return currentSum;
        }
        else {
            currentSum += b;
            return f;
        }
    }
    return f;
}
console.log(makeCurry(1)(3)());
console.log(makeCurry(1)(2)(3)());
console.log(makeCurry(1)(2)(3)(4)());
console.log(makeCurry(1)(2)(3)(4)(5)());
