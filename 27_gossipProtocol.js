const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
      const row = [];
      for (let i = 0; i < line.length; i++) row.push(line[i]);
      matrix.push(row);
    });
    return matrix;
  };
  
  const gossipProtocol = function (village, row, col) {
    // bfs로 풀거에용
    village = createMatrix(village) //인접행렬
    let count=0
    let visited=Array.from(Array(village.length), () => new Array(village[0].length).fill(0))
    visited[row][col]=1
    let dx=[-1,0,1,0]
    let dy=[0,1,0,-1]

    function findChildren(x,y){
        const children=[]
        for(let i=0; i<4; i++){
            let nx=x+dx[i]
            let ny=y+dy[i]

            if(nx>=0 && nx<village.length && ny>=0 && ny<village[0].length && village[nx][ny]==='1' && visited[nx][ny]===0){
                children.push([nx, ny])
            }
        }
        return [...children]
    }

    let queue=[[[row,col],0]]
    let result=0
    while(queue.length){
        let current = queue.shift()
        visited[current[0][0]][current[0][1]]=1
        const children=findChildren(current[0][0],current[0][1])
        for(let i of children){
            queue.push([[...i], current[1]+1])
            visited[i[0]][i[1]]=1
        }
        result=current[1]
    }
    
    return result

};
  let village = [
  '0101', // 첫 번째 줄
  '0111',
  '0110',
  '0100',
];
let row = 1;
let col = 2;
let output = gossipProtocol(village, row, col);
console.log(output); // --> 3