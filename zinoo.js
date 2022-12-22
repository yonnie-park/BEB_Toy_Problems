const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
      const row = [];
      for (let i = 0; i < line.length; i++) row.push(line[i]);
      matrix.push(row);
    });
    return matrix;
  };
  
  const isInScope = (x,y,matrix)=> x>=0&&y>=0&&x<matrix.length&&y<matrix[0].length;
  
  const bfs = (matrix,guards) => {
    const dx = [-1,0,1,0];
    const dy = [0,-1,0,1];
    
    let queue = []
    
    let isVisited = [];
    for(let i=0;i<matrix.length;i++){
      isVisited.push(Array(matrix[0].length).fill(0));
    }
  
    let max = 0;
    for(let i=0;i<guards.length;i++){
      queue.push([...guards[i],0]);
      isVisited[guards[i][0]][guards[i][1]] = 1;
    }
    while(queue.length>0){
      let [x,y,cnt] = queue.shift();
      max = Math.max(max,cnt);
  
      for(let i=0;i<4;i++){
        let newX = x +dx[i];
        let newY = y +dy[i];
  
        if(isInScope(newX,newY,matrix) && !isVisited[newX][newY] && matrix[newX][newY]==='1'){
          queue.push([newX,newY,cnt+1]);
          isVisited[newX][newY] = 1;
        }
      }
    }
    for(let i=0;i<matrix.length;i++){
      for(let j=0;j<matrix[0].length;j++){
        if(matrix[i][j]==='1'&&!isVisited[i][j]) return Infinity;      //gossip이 전체로 퍼지지 않은 경우 답에 포함되지 못하도록 무한대를 리턴한다.
      }
    }
  
    return max;
  }
  
  const gossipProtocol2 = function (village, num) {
    let matrix = createMatrix(village);
    let guard = [];
  
    for(let i=0;i<matrix.length;i++){
      for(let j=0;j<matrix[0].length;j++){
        if(matrix[i][j]==='2') {
          guard.push([i,j]);
          matrix[i][j] = '0';
        }
      }
    }
    let min = Infinity;
    const combination = (n,next,result) => {
      if(result.length===n){
        min = Math.min(bfs(matrix,result),min);
        return;
      }
      for(let i=next;i<guard.length;i++){
        result.push(guard[i]);
        combination(n,i+1,result);
        result.pop();
      }
    }
    combination(num,0,[]);
    return min;
  };