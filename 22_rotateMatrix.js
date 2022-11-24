const rotateMatrix = function (matrix, k=1) {
    // TODO: 여기에 코드를 작성합니다.
    if (matrix.length===0) return []
    for(let i=0; i<k; i++){
        matrix = rotate(matrix)
    }
    return matrix
};
function rotate(matrix){
    let result=[]
    for (let i=0; i<matrix[0].length; i++){
        let arr=[]
        for(let j=matrix.length-1; j>=0; j--){
            arr.push(matrix[j][i])
        }
        result.push(arr)
    }
    return result
}

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]
console.log(rotateMatrix(matrix))