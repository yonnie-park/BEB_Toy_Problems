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

function radixSort(arr){
    let max = longest(arr)
    let negativeArr=[]
    let negNums=[]
    let result=[]
    
    //negative
    for(let i=arr.length-1; i>=0; i--){ //make positive array with negative nums
        if(arr[i]<0) {
            negativeArr.push(arr[i]*-1)
            arr.splice(i,1)
        }
    }

    let maxNeg = longest(negativeArr)

    for(let k=0; k<maxNeg; k++){
        let digitArrNeg=Array.from({length: 10}, () => [])
        for(let i=0; i<negativeArr.length; i++){
            let digit=getDigit(negativeArr[i],k)
            digitArrNeg[digit].push(negativeArr[i])
        }
        negativeArr=[].concat(...digitArrNeg)
    }
    for(let i=negativeArr.length-1; i>=0; i--){
        negNums.push(negativeArr[i]*-1)
    }
    result=negNums.concat(...arr)

    //positive
    for(let k=0; k<max; k++){
        let digitArr=Array.from({length: 10}, () => [])
        
        for(let i=0; i<arr.length; i++){
            let digit=getDigit(arr[i],k)
            digitArr[digit].push(arr[i])
        }        
        arr=[].concat(...digitArr)
    }

    return result
}
let output = radixSort([-11, -1231, -1231231, -12]);
console.log(output);