// helper function to find certain digit
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
}

// helper function to find digit count
function digitCount(num){
    if(num===0) return 1
    return Math.floor(Math.log10(Math.abs(num)))+1
}

//helper function to find max digits
function longest(numArr){
    let max=0
    for(let i=0; i<numArr.length; i++){
        max= Math.max(max, digitCount(numArr[i]))
    }
    return max
}

// 음수가 안돌아간다.. 따로 배열 만들어서 해야될듯
function radixSort(arr){
    let max = longest(arr)
    for(let k=0; k<max; k++){
        let digitArr=Array.from({length: 10}, () => [])
        for(let i=0; i<arr.length; i++){
            let digit=getDigit(arr[i],k)
            digitArr[digit].push(arr[i])
        }
        arr=[].concat(...digitArr)
    }
    return arr
}
