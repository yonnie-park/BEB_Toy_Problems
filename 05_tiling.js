// 세로 길이 2, 가로 길이 n인 2 x n 보드가 있습니다. 2 x 1 크기의 타일을 가지고 이 보드를 채우는 모든 경우의 수를 리턴해야 합니다.
let tiling = function (n) {
  n=n+1
  let f=[0,1]
  for (let i = 2; i <= n; i++){
    f[i] = f[i-1] + f[i-2];
  }
  return f[n];
};
