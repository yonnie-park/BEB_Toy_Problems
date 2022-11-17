const balancedBrackets = function (str) {
    let arr=[]
    let left={
      '(' : ')',
      '[' : ']',
      '{' : '}'
    }
  
    for(let i=0; i<str.length; i++){
      if(str[i]==='(' || str[i]==='{' || str[i]==='['){
        arr.push(str[i])
      } else{
        let farthestRight=arr.pop()
        if(str[i] !== left[farthestRight]){
          return false
        }
      }
    }
    if(arr.length != 0) return false
  
    return true
  };
