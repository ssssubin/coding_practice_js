function solution(n) {  
    return parseInt(n.toString().split("").sort((a,b) => Number(b) - Number(a)).join(""));
}