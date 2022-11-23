const LPS = function (str) {
    let result=''
    let half=Math.floor(str.length/2)
    for(let i=0; i<=half; i++){
        let front=str.slice(0,i)
        let back=str.slice(str.length-i)
        if(front===back){
            result=front
        }
    }
    return result.length
};

output = LPS('aaabbaa');
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(3)
// non-overlapping 조건이 없는 경우 정답은 5 입니다.
  