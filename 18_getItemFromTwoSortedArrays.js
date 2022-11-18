const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    let count=0,
    idx1=0,
    idx2=0,
    output;

    while(count<k){
        if(arr1[idx1]<arr2[idx2]){
            output=arr1[idx1]
            idx1++
        } else{
            output=arr2[idx2]
            idx2++
        }
        count++
    }
    return output
};
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8

arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays(arr1, arr2, 4);
console.log(result); // --> 3