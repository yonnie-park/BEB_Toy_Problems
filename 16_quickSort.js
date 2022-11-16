const quickSort = function (arr, callback) {
    if(!callback) callback = (ele)=>{return ele}

    if (arr.length <= 1) {
        return arr
    };
    const pivot = arr[0];
    let result = []
    let left = []
    let right = []
    for (let i = 1; i < arr.length; i++) {
       if (callback(arr[i]) < callback(pivot)) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
    }
    const leftSort = quickSort(left, callback)
    const rightSort = quickSort(right, callback)
    result = [...leftSort, pivot, ...rightSort];
    return result;
};
let output = quickSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]