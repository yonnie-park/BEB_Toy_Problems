const sudoku = function (board) {
  const N = board.length;
  const boxes = [
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
  ];
  const getBoxNum = (row, col) => boxes[row][col];

  const blanks = [];
  const rowUsed = [];
  const colUsed = [];
  const boxUsed = [];
  for (let row = 0; row < N; row++) {
    rowUsed.push(Array(N + 1).fill(false));
    colUsed.push(Array(N + 1).fill(false));
    boxUsed.push(Array(N + 1).fill(false));
  }

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (board[row][col] === 0) {
        blanks.push([row, col]);
      } else {
        const num = board[row][col];
        const box = getBoxNum(row, col);
        rowUsed[row][num] = true;
        colUsed[col][num] = true;
        boxUsed[box][num] = true;
      }
    }
  }

  const isValid = (row, col, num) => {
    const box = getBoxNum(row, col);
    return (
      rowUsed[row][num] === false &&
      colUsed[col][num] === false &&
      boxUsed[box][num] === false
    );
  };

  const toggleNum = (row, col, num) => {
    const box = getBoxNum(row, col);
    board[row][col] = num;
    rowUsed[row][num] = !rowUsed[row][num];
    colUsed[col][num] = !colUsed[col][num];
    boxUsed[box][num] = !boxUsed[box][num];
  };

  const aux = (idx, blanks, board) => {
    if (idx === blanks.length) {
      return true;
    }

    const [row, col] = blanks[idx];
    for (let num = 1; num <= 9; num++) {
      if (isValid(row, col, num) === true) {
        toggleNum(row, col, num);
        if (aux(idx + 1, blanks, board) === true) {
          return true;
        }
        toggleNum(row, col, num);
      }
    }
    return false;
  };

  aux(0, blanks, board);
  return board;
};


// const sudoku = function(board){
//     const write = (board)=>{
//         let isComplete = true
//         for(let i=0; i<board.length; i++){
//             for(let j=0; j<board.length; j++){
//                 let target=[0,0]
//                 if(board[i][j]===0){
//                     isComplete=false
//                     target[0]=i
//                     target[1]=j
//                     board[i][j]=check3D(...target,board)
//                 }
//             }
//         }

//         if(!isComplete){
//             write(board)
//         }
//         return board
//     }
//     return write(board)
// }

// const checkOver = (arr)=>{
//     let result=[...Array(10).keys()].slice(1)
//     return result.filter(el=> !arr.includes(el))
// }

// const check3D=(x,y,board)=>{
//     let hrz=checkOver(board[x])

//     let col=[]
//     for(let i=0; i<board[x].length; i++){
//         col.push(board[i][y])
//     }
//     col=checkOver(col)

//     let colIndex=3*parseInt(x/3)
//     let rowIndex=3*parseInt(y/3)
//     let unit=[]
//     for(let i=colIndex; i<colIndex+3; i++){
//         for(let j=rowIndex; j<rowIndex+3; j++){
//             unit.push(board[i][j])
//         }
//     }
//     unit = checkOver(unit)

//     let filtered = hrz.filter((el)=>(col.includes(el)&&unit.includes(el)))
//     if(filtered.length===1) return filtered[0]
//     return 0;
// }
