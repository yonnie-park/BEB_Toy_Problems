const mergeSort = function (arr) {
    if(arr.length<=1) return arr

    let mid=Math.ceil(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
};
function merge(left, right){
    let result=[]

    while(left.length && right.length){
        if(left[0]<right[0]){
            result.push(left.shift())
        } else{
            result.push(right.shift())
        }
    }

    return [...result, ...left, ...right]
}
