const primePassword = (curPwd, newPwd) => {
    // TODO: 여기에 코드를 작성합니다.
    const isPrime = Array(10000).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i * i < isPrime.length; i++) {
      for (let j = i * i; j < isPrime.length; j += i) {
        if (isPrime[j]) {
          isPrime[j] = false;
        }
      }
    }
  
    curPwd = String(curPwd)
      .split('')
      .map((e) => Number(e));
    const queue = [[[...curPwd], 0]];
    const visited = [];
    while (queue.length != 0) {
      const curVertex = queue.shift();
      visited.push(curVertex[0].join(''));
      if (Number(curVertex[0].join('')) === newPwd) return curVertex[1];
      for (let i = 0; i < 4; i++) {
        const compareNum = [...curVertex[0]];
        for (let j = 0; j < 10; j++) {
          if ((i === 0 && j === 0) || curVertex[0][i] === j) continue;
          compareNum[i] = j;
          const changedNum = Number(compareNum.join(''));
          if (isPrime[changedNum] && !visited.includes(String(changedNum))) {
            queue.push([[...compareNum], curVertex[1] + 1]);
            visited.push(String(changedNum));
          }
        }
      }
    }
  };
  
  console.log(primePassword(9787, 9923));