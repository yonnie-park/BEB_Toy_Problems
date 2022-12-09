const LIS = function(arr) {
    let lis = Array(arr.length).fill(1)
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] <= lis[j]) {
                lis[i] = lis[j] + 1
            }
        }
    }
    let max = Math.max(...lis)
    return max
};
let output = LIS([3, 10, 2, 1, 20]);
console.log(output); // --> 3 (3, 10, 20)