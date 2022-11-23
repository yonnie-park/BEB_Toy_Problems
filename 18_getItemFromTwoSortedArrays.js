const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let idx1 = 0;
  let idx2 = 0;

  while ( k > 0){
    let cnt = Math.ceil(k/2);
    
    let cntToArr1 = cnt;
    let cntToArr2 = cnt;
    
    // 3. 이미 해당 배열의 인덱스가 범위를 벗어나는 경우
    if (arr1.length === idx1){
      idx2 += cnt;
      break;
    } 
    if (arr2.length === idx2){
      idx1 += cnt;
      break;
    }

    // 2. 이번 라운드에서 확인해야할 인덱스가 범위를 벗어나는 경우 할당량 떠넘기기
    if(cnt > arr1.length - idx1) cntToArr1 = arr1.length - idx1;
    if(cnt > arr2.length - idx2) cntToArr2 = arr2.length - idx2;

    // 1. 기본 실행문
    if(arr1[idx1 + cntToArr1 -1] < arr2[idx2 + cntToArr2 - 1]){
      idx1 += cntToArr1;
      k -= cntToArr1;
    } else{
      idx2 += cntToArr2;
      k -= cntToArr2;
    }
  }

  let numArr1 = arr1[idx1-1] || -1;
  let numArr2 = arr2[idx2-1] || -1;

  return Math.max(numArr1, numArr2);
};

let arr1 = [1,3,5,7,8];
let arr2 = [5, 6, 7, 8, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result);

