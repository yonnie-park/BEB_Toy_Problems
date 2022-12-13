const uglyNumbers = function(n) {
    //숫자가 2,3,5의 배수라면, 계속 나누었을때 몫은 1이고 나머지는 0이된다
    //decompose 함수에 의해 num===1이 되면 true를
    //2,3,5의 배수가 아니어서 몫이 1이 아니라면 false를 리턴한다
    const isUgly = (num) => {
            num = decompose(num, 2);
            num = decompose(num, 3);
            num = decompose(num, 5);
            return num === 1;
        }
        //num을 factor로 나누었을때 나누어떨어지면 num에 몫을 저장한다
        //num이 factor로 더이상 나누어떨어지지 않으면, num을 리턴한다
        //decompsoe(7,2)라면 처음부터 나누어떨어지지 않으므로 7을 리턴한다
        //decompose(8,2)라면 num은 4,2,1이 되어 마지막에 1을 리턴한다
    const decompose = (num, factor) => {
        while (num % factor === 0) num = num / factor
        return num;
    }
    let num = 0; //0부터 차례로 확인하는 값
    let cnt = 0; //n===cnt가 되면 num을 리턴한다
    while (n > cnt) {
        num++
        if (isUgly(num)) cnt++
    }
    return num;
}