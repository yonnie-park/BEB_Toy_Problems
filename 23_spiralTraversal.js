const spiralTraversal = function (matrix) {
    let result = ''

    if(matrix.length===0)return ''
    
    if(matrix.length===1){
      for(let i=0; i<matrix[0].length; i++){
        result+=matrix[0][i]
      }
      return result;
    }
    
    for(let i=0; i<matrix[0].length-1; i++){
      result+=matrix[0][i]
    }
    for(let i=0; i<matrix.length-1; i++){
      result+=matrix[i][matrix[0].length-1]
    }
    for(let i=matrix[0].length-1; i>0; i--){
      result+=matrix[matrix.length-1][i]
    }
    for(let i=matrix.length-1; i>0; i--){
      result+=matrix[i][0]
    }


    let center = matrix.slice(1, matrix.length-1)
    for(let i=0; i<center.length; i++){
      center[i] = center[i].slice(1, center[i].length-1)
    }
    return result+spiralTraversal(center);
  };

  let matrix = [

    [1, 2],
    [3, 4],
    [5, 6]
  ]
  let output = spiralTraversal(matrix);
  console.log(output)

