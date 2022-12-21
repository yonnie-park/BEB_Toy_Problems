const countIslands = function(grid) {
    // TODO: 여기에 코드를 작성합니다.
    function bfs(grid, row, col) {
        let dx = [-1, 0, 1, 0]
        let dy = [0, 1, 0, -1]
        let queue = []
        queue.push([row, col])

        while (queue.length) {
            let [x, y] = queue.shift()
            grid[x][y] = "0"
            for (let i = 0; i < 4; i++) {
                let nx = x + dx[i]
                let ny = y + dy[i]

                if (nx >= 0 && ny >= 0 && nx < grid.length && ny < grid[0].length && grid[nx][ny] === "1") {
                    queue.push([nx, ny])
                    grid[nx][ny] = "0"
                }
            }
        }
    }
    let ans = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                bfs(grid, i, j)
                ans++
            }
        }
    }
    return ans
};
let grid = [
    ['0', '1', '1', '1'],
    ['0', '1', '1', '1'],
    ['1', '1', '0', '0'],
];
let result = countIslands(grid);
console.log(result); // --> 1

grid = [
    ['0', '1', '1', '1', '0'],
    ['0', '1', '0', '0', '0'],
    ['0', '0', '0', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '1', '0'],
];
result = countIslands(grid);
console.log(result); // --> 3