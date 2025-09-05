function solution(x) {
    const answer = x.toString().split("").reduce((arr, cur) => Number(arr) + Number(cur));
    
    return x % answer === 0;
}