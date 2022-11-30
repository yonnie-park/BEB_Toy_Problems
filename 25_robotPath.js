const robotPath = function (room, src, dst) {
  let path=[]
  let result=[]
  let dx=[-1, 0, 1, 0]
  let dy=[0, 1, 0, -1]

  function DFS(x,y){
    if(x===dst[0] && y===dst[1]) {
      result.push([...path])   
    }
    else{
      for(let k=0; k<4; k++){
        let nx=x+dx[k]
        let ny=y+dy[k]

        if(nx>=0 && nx<room.length && ny>=0 && ny<room[0].length && room[nx][ny]==0){
          room[nx][ny]=1
          path.push(1)
          DFS(nx, ny);
          room[nx][ny]=0
          path.pop()
        }
      }
    }
  }
  room[src[0]][src[1]]=1
  DFS(src[0],src[1])
  let ans=[]
  for(let i=0; i<result.length; i++){
    ans.push(result[i].length)
  }
  return Math.min(...ans)
};
  let room = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0],
  ];
  let src = [4, 2];
  let dst = [2, 2];
  let output = robotPath(room, src, dst);
  console.log(output);