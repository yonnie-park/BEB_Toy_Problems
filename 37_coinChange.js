const coinChange = function(total, coins) {
    // TODO: 여기에 코드를 작성합니다.
    const table = [];
    for (let i = 0; i < total + 1; i++) table.push(Array(coins.length).fill(0));
    for (let i = 0; i < coins.length; i++) table[0][i] = 1;

    for (let amount = 1; amount <= total; amount++) {
        for (let idx = 0; idx < coins.length; idx++) {
            let coinUsed = 0;
            if (amount - coins[idx] >= 0) {
                coinUsed = table[amount - coins[idx]][idx];
            }

            let coinExcluded = 0;
            if (idx >= 1) {
                coinExcluded = table[amount][idx - 1];
            }
            table[amount][idx] = coinUsed + coinExcluded
        }
    }
    return table[total][coins.length - 1]
};


let total = 10;
let coins = [1, 5];
let output = coinChange(total, coins);
console.log(output); // --> 3

total = 4;
coins = [1, 2, 3];
output = coinChange(total, coins);
console.log(output); // --> 4