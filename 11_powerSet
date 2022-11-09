const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let arr=str.split('')
  arr=[...new Set(arr)].sort() //중복제거, 정렬

  arr = arr.reduce((prev,curr)=>prev.concat(prev.map(k=>k.concat(curr))),[[]])
  let output=[]
  for(let i=0; i<arr.length; i++){
    output.push(arr[i].join(''))
  }
  return output.sort() 
};
