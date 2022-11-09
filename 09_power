function power(base, exponent) {
    if(exponent == 0) return 1;

    let half = power(base, Math.floor(exponent/2));
    let result= (half*half)%94906249
    if(exponent%2 == 0) return result;
    else return base*result%94906249;
}
