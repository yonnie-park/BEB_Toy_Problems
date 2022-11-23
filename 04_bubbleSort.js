const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  var isSwapped = false;
  for(let i =0; i < arr.length; i++){
    isSwapped = false;
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > arr[j + 1]){
          var temp = arr[j]
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          isSwapped = true;
        }
    }
    if(!isSwapped){
      break;
    }
  }
  return arr
}
 
