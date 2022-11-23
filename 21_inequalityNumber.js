const inequalityNumber = function (signs) {
    // TODO: 여기에 코드를 작성합니다.
    signs=signs.split(" ")
    let max=[9]
    let min=[0]
    let idx=-1
    let minIdx=-1
    for(let i=0; i<signs.length; i++){
      if(signs[i]==="<"){
        if(idx===-1) idx=i
        max.splice(idx,0,max[idx]-1)

        minIdx=-1
        let minNum=min[i]
        while(min.includes(minNum)) minNum++
        min[i+1]=minNum
      }
      if(signs[i]===">"){
        idx=-1
        let maxNum= max[i]
        while(max.includes(maxNum)) maxNum--
        max[i+1]=maxNum

        if(minIdx===-1) minIdx=i
        min.splice(minIdx,0,min[minIdx]+1)
      }
    }
    min=Number(min.join(''))
    max=Number(max.join(''))

    return max-min
  };
  let output = inequalityNumber('<');
  console.log(output); // --> 88 (89 - 01)
  
  output = inequalityNumber('< >');
  console.log(output); // --> 876 (897 - 021)
  
  output = inequalityNumber('> < >');
  console.log(output); // --> 8,754 (9,786 - 1,032)