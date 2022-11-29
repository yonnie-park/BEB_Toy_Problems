const robotPath = function (room, src, dst) {
    let visited = Array(room.length).fill(0).map(()=>[]);
    visited[src[0]][src[1]] = 1;
    let q = [[...src, 1]];

    const direction = [
        [0,1],
        [0,-1],
        [1,0],
        [-1,0]
      ];

    while(q.length !== 0) {
      let result = q.shift();  
      let [y, x, cnt] = result;
      for(let i = 0; i < 4; i++) {
        let dy = y + direction[i][0];
        let dx = x + direction[i][1];
        if(dx < 0 || dy < 0 || dx > room[0].length - 1 || dy > room.length - 1) continue;
        if(room[dy][dx] === 1) continue;
        if(visited[dy][dx]) continue;
        visited[dy][dx] = 1;
        q.push([dy, dx, cnt + 1]);
        if(dy === dst[0] && dx === dst[1]) return result[2];
      }
    }
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