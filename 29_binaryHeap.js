// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
    // 두 변수를 바꾸는 방법
  
    // 1) 임시 변수를 활용한 방법
    // let temp = arr[idx1];
    // arr[idx1] = arr[idx2];
    // arr[idx2] = temp;
  
    // 2) Destructuring assignment를 활용한 방법
    // arr이 reference type이라 가능
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  
    // 3) XOR 연산을 활용한 방법
    // arr이 reference type이라 가능
    // arr[idx1] ^= arr[idx2];
    // arr[idx2] ^= arr[idx1];
    // arr[idx1] ^= arr[idx2];
  }
  
  function getParentIdx(idx) {
    // TODO: 여기에 코드를 작성합니다.
    return Math.floor((idx - 1) / 2);
  }
  
  function insert(heap, item) {
    // TODO: 여기에 코드를 작성합니다.
    heap.push(item)
    let currentIdx=heap.length-1
    let parentIdx=getParentIdx(currentIdx)
    while(parentIdx>=0 && heap[currentIdx]>heap[parentIdx]){
        swap(currentIdx, parentIdx, heap)
        currentIdx=parentIdx
        parentIdx=getParentIdx(currentIdx)
    }
    return heap
  }
  
  // 아래 코드는 수정하지 마세요.
  const binaryHeap = function (arr) {
    return arr.reduce((heap, item) => {
      return insert(heap, item);
    }, []);
  };
  