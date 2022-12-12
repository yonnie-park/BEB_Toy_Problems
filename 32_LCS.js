function max(a, b) {
    if (a > b) return a
    else return b
}
const LCS = function(str1, str2) {
    let L = Array.from(Array(str1.length + 1), () => new Array(str2.length + 1).fill(-1))

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (i == 0 || j == 0) L[i][j] = 0
            else if (str1[i - 1] == str2[j - 1]) L[i][j] = L[i - 1][j - 1] + 1
            else L[i][j] = max(L[i - 1][j], L[i][j - 1])
        }
    }
    return L[str1.length][str2.length]
}