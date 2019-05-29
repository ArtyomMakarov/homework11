function makeCurry(a: any):any {
    let currentSum: number = a;
    function f(b: any):any {
        if (b === undefined) {
            return currentSum;
        } else {
            currentSum += b;
            return f;
        }
    }
    return f;
}
console.log(makeCurry(1)(2)());
console.log(makeCurry(1)(2)(3)());
console.log(makeCurry(1)(2)(3)(4)());
console.log(makeCurry(1)(2)(3)(4)(5)());