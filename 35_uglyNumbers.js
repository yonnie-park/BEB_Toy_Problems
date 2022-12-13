const uglyNumbers = function(n) {
    //1,2,3,4,5,6,8,9,...
    function maxDivide(a, b) {
        while (a % b == 0) a = a / b
        return a
    }

    function isUgly(num) {
        num = maxDivide(num, 2)
        num = maxDivide(num, 3)
        num = maxDivide(num, 5)

        if (num === 1) return 1
        else return 0
    }

    let count = 1,
        i = 1

    while (n > count) {
        i++
        if (isUgly(i) === 1) {
            count++
        }
    }

    return i
}

console.log(uglyNumbers(15))