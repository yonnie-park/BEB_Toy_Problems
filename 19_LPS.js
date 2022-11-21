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

let output = LPS('abcababca');
console.log(output); // --> 0

output = LPS('aaaa');
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(2)
// non-overlapping 조건이 없는 경우 정답은 4 입니다.

output = LPS('aaaaa');
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(3)
// non-overlapping 조건이 없는 경우 정답은 5 입니다.
  