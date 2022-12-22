const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
        const row = [];
        for (let i = 0; i < line.length; i++) row.push(line[i]);
        matrix.push(row);
    });
    return matrix;
};

const gossipProtocol2 = function(village, num) {
    // TODO: 여기에 코드를 작성합니다.
    let twos = get2num(village)
    return getCombinations(twos, num)
};

const get2num = function(village) {
    let twos = []
    for (let i = 0; i < village.length; i++) {
        for (let j = 0; j < village[0].length; j++) {
            if (village[i][j] === "2") twos.push([i, j])
        }
    }
    return twos
}

const getCombinations = (arr, size) => {
    if (size === 1) return arr.map(item => [item])
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const rest = getCombinations(arr.slice(i + 1), size - 1)
        for (let j = 0; j < rest.length; j++) {
            result.push([arr[i]].concat(rest[j]))
        }
    }
    return result
}

const isInScope = (x, y, matrix) => x >= 0 && y >= 0 && x < matrix.length && y < matrix[0].length;


let village = [
    '0022', // 첫 번째 줄
    '0020',
    '0020',
    '0220',
];
let num = 2;
let output = gossipProtocol2(village, num);
console.log(output); // --> 0 (이미 모든 주민이 정보를 알고 있는 상태)