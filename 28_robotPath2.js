const robotPath2 = function (room, src, sDir, dst, dDir) {
    // TODO: 여기에 코드를 작성합니다.
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
  
    const visited = Array.from(Array(room.length), () =>
      new Array(room[0].length).fill(0)
    );
  
    visited[src[0]][src[1]] = 1;
    // [[x,y],dir,step]
    const queue = [[[src[0], src[1]], sDir, 0]]
    while(queue.length){
      let current=queue.shift()
      for(let i=1; i<=4; i++){
        let nx=x+dx[i]
        let ny=y+dy[i]

        if(nx>=0 && nx<room.length && ny>=0 && ny<room[0].length){
          //여기에 뭘 해야댐   
        }
      }
    }
}
  const room = [
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  const src = [0, 4];
  const sDir = 1;
  const dst = [7, 0];
  const dDir = 3;
  let output = robotPath2(room, src, sDir, dst, dDir);
  console.log(output);