function orderOfPresentation(N, K) {

  const factorial = function(n){
    if (n <= 1) return n;
    return n * factorial(n - 1);
  }; //경우의수 파악
  
  let count=0 
  let used=[] 
  for(let i=0; i<N; i++){
    let base = K[i]-1
    for(let j of used){
      if(j<K[i]){
        base --
      }
    }
    used.push(K[i])
    count+= base*factorial(N-(i+1))
  }
  return count
}
