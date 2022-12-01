const isPrime = new Array(10000).fill(true);

const makeSimiliarNumber = (a,i,j) =>{
    let arr = String(a).split('');
    arr[j]= i;
    return Number(arr.join(''));
}

const makePrime = () =>{
  isPrime[0]= false;
  isPrime[1]= false;

  for(let i=2; i*i<10000;i++){
    for(let j=i*i; j<10000; j+=i){
      if(isPrime[j]){
        isPrime[j]= false;
      }
    }
  }
}

makePrime();

const primePassword = (curPwd, newPwd) => {

  const queue = [];
  const isVisited = new Array(10000).fill(0); 

  queue.push([curPwd,0]);
  isVisited[curPwd] = 1;

  while(queue.length>0){
    let [pwd,count] = queue.shift();
    if(pwd == newPwd) return count;

    for(let j=0;j<4;j++){
      for(let i=0;i<10;i++){
        let next = makeSimiliarNumber(pwd,i,j);

        if( next>1000 && isVisited[next]===0 && isPrime[next]){
          queue.push([next,count+1]);
          isVisited[next] = 1;
        }
      }
    }
  }
  return -1
};

output = primePassword(3733, 8779);
console.log(output); // --> 3 (3733 -> 3739 -> 3779 -> 8779)