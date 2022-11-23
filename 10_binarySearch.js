const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  function recursion(min,max){
    if(min>max) return -1
    let mid = Math.floor((min+max)/2)

    if(arr[mid]===target) return mid
    if(arr[mid]>target){
      return recursion(min, mid-1)
    }
    return recursion(mid+1, max)
  }

  return recursion(0, arr.length-1)
};
