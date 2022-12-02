const robotPath2 = function (room, src, sDir, dst, dDir) {
    // TODO: 여기에 코드를 작성합니다.
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
  
    const visited = Array.from(Array(room.length), () =>
      new Array(room[0].length).fill(0)
    );
  
    visited[src[0]][src[1]] = 1;
    // [[x,y],dir,step]
    const queue = [[[src[0], src[1]], sDir, 0]];
    let prevDir = sDir;
    const desInfos = [];
    while (queue.length != 0) {
      const curVertex = queue.shift();
      if (curVertex[0].join('') === dst.join('')) {
        desInfos.push(curVertex[2] + Math.abs(curVertex[1] - dDir));
      }
      prevDir = curVertex[1];
  
      for (let i = 1; i <= 4; i++) {
        const nx = curVertex[0][0] + dx[i - 1];
        const ny = curVertex[0][1] + dy[i - 1];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < room.length &&
          ny < room[0].length &&
          room[nx][ny] === 0 &&
          visited[nx][ny] === 0
        ) {
          let dirStep = 0;
          let moveStep = 1;
          if (Math.abs(i - prevDir) === 2) dirStep = 2;
          else if (Math.abs(i - prevDir) === 0) {
            dirStep = 0;
            moveStep = 0;
          } else dirStep = 1;
          queue.push([[nx, ny], i, curVertex[2] + dirStep + moveStep]);
          if (!([nx, ny].join('') === dst.join(''))) visited[nx][ny] = 1;
        }
      }
    }
    return Math.min(...desInfos);
  };
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