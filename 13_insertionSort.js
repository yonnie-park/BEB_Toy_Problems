const insertionSort = function (arr, callback) {
  // TODO: 여기에 코드를 작성합니다.

  if(!callback)callback = (ele)=>{return ele};
  for(let i=1; i<arr.length; i++){
    let curr= arr[i]
    let j;
    for(j = i-1; j>=0 &&callback(arr[j])>callback(curr); j--){
      arr[j+1]=arr[j]
    }
    arr[j+1]=curr;
  }
  return arr
  
};

let output = insertionSort([3, 1, 21,11,4]);
console.log(output)