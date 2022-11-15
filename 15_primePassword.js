const primePassword = (curPwd, newPwd) => {
    // TODO: 여기에 코드를 작성합니다.
    let count=0
    curPwd=String(curPwd).split("")
  
    function isPrime(arr) { //helper function to check if prime
        let num=Number(arr.join(""))
        for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){ //제곱근보다 큰수까지 돌릴필요 없음
            if(num % i === 0){ //divisible at lease once
                return false; 
            }
        }
        return true; 
    }
 
    function bfs(curPwd,newPwd){ //helper function for bfs
      //queue
      let queue=[]
      let head=0
      let tail=0
  
      function enqueue(){

      }
      //visited
      let visited=new Array(10000).fill(0)
      visited[curPwd]=1
           
  
  
      //count++
    }
  
  
    if (isPrime(curPwd)) return 0 //already prime
    else{
      bfs(curPwd)
      return count
    }
};

let output = primePassword(1033, 1033);
console.log(output); // --> 0

output = primePassword(3733, 8779);
console.log(output); // --> 3 (3733 -> 3739 -> 3779 -> 8779)
  