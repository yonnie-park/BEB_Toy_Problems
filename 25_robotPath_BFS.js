function robotPath(room, src, dst){
    let visited=Array.from(Array(room.length), () => new Array(room[0].length).fill(0))


    let dx=[-1, 0, 1, 0]
    let dy=[0, 1, 0, -1]

    function findChildren(x,y){
        const children=[]
        for(let i=0; i<4; i++){
            let nx=x+dx[i]
            let ny=y+dy[i]

            if(nx>=0 && nx<room.length && ny>=0 && ny<room[0].length && room[nx][ny]===0 && visited[nx][ny]===0){
                children.push([nx, ny])
            }
        }
        return children
    }

    let queue=[[[src[0],src[1]],0]]
    while(queue[0][0].join("")!=dst.join("")){
        const current = queue.shift()
        visited[current[0][0]][current[0][1]]=1
        const children = findChildren(current[0][0],current[0][1])
        
        for(let i of children){
            queue.push([[...i],current[1]+1])
            visited[i[0]][i[1]]=1
        }      
    }

    return queue[0][1]
}

const room = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0],
  ];
  const src = [4, 2];
  const dst = [2, 2];
  let output = robotPath(room, src, dst);
  console.log(output);