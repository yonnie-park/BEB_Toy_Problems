const LIS = function(arr) {
    //TODO: 여기에 코드를 작성합니다.
    let list = Array(arr.length).fill(0)
    for (let i = 0; i < arr.length; i++) {
        list[i] = 1
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && list[i] < list[j] + 1) {
                list[i] = list[j] + 1
            }
        }
    }
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (max < list[i]) max = list[i]
    }
    return max
};
let output = LIS([3, 2]);
console.log(output); // --> 1 (3 or 2)