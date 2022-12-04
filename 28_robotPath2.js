function robotPath2(room, src, sDir, dst, dDir){
  let q = [];
  let dist= [];

  for(let i=0;i<room.length;i++){
    dist.push(Array(room[0].length).fill(Infinity));
  }

  let dx = [,-1,0,1,0];
  let dy = [,0,1,0,-1];

  q.push([...src,sDir,0]);
  dist[src[0]][src[1]] = 0;

  const canGo = (x,y) => (x>=0&&x<room.length&&y>=0&&y<room[0].length&&room[x][y]===0);
  
  const isDst = (x,y) => (x===dst[0]&&y===dst[1]);

  const getNumOfRotate = (diff) => {
    if(diff===3) return 1;
    return diff;
  }
  
  const getNextCount = (diff,count,nextx,nexty,nextDirection) =>{
        let numOfRotate = getNumOfRotate(diff);
        
        if(isDst(nextx,nexty)){
          let lastRotation = getNumOfRotate(Math.abs(nextDirection-dDir));

          if(numOfRotate===0) return(count===0? count + 1 + lastRotation : count + lastRotation);//방향이 같을 경우 시작점에서는 +1, 아닌경우 +0
          return numOfRotate + count + 1 + lastRotation;
        }
        else{
          if(numOfRotate===0) return(count===0? count + 1 : count);//방향이 같을 경우 시작점에서는 +1, 아닌경우 +0
          return numOfRotate + count + 1;
        }
  }

  while(q.length>0){
    let [x,y,direction,count] = q.shift();

    for(let i=1;i<=4;i++){
      let nextx = x+dx[i];
      let nexty = y+dy[i];

      if(canGo(nextx,nexty)){
        let nextCount = getNextCount(Math.abs(direction-i),count,nextx,nexty,i);

        if(nextCount<=dist[nextx][nexty]){
          dist[nextx][nexty] = nextCount;
          q.push([nextx,nexty,i,nextCount]);
        }
      }
    }
  }
  
  return dist[dst[0]][dst[1]]
}