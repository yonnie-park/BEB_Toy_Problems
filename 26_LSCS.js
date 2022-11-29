const LSCS = function (arr) {
    let max=Math.min(...arr), sum=0

    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
        if(sum>max) max=sum
        if(sum<0) sum=0
    }

    return max
};

console.log(LSCS([1, 2, 3]))
console.log(LSCS([1, 2, 3, -4]))
console.log(LSCS([1, 2, 3, -4, 5]))
console.log(LSCS([10, -11, 11]))