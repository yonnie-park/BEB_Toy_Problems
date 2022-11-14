const rotatedArraySearch = function (rotated, target) {
    // TODO : 여기에 코드를 작성합니다.
    let min=0
    let max=rotated.length-1
    let mid

    while(min<=max){
        mid=Math.floor((min+max)/2)
        if(rotated[mid]==target) return mid
        if(rotated[mid]<=rotated[min]){
            if(target<=rotated[max]&&target>=rotated[mid]){
                min=mid+1
            } else max=mid-1
        }
        else{
            if(target>=rotated[min]&&target<=rotated[mid]){
                max=mid-1
            }else min=mid+1
        }
    }

  return -1

};
let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1

output = rotatedArraySearch([10, 11, 12, 3, 6, 7, 8, 9], 11);
console.log(output); // --> 1