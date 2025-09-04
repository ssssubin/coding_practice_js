function solution(a, b) {
    const min = a <= b ? a: b;
    const max = a >= b ? a : b;
    if(min === max) return min;
    else{
        let sum = 0;
        for(let i = min; i <= max; i++){
            sum += i;
        }
        return sum;
    }
}