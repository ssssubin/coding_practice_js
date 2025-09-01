function solution(x, n) {
    const answer = [];
    for(let i = 1; i <= n; i++){
        answer.push(x * i);
    }
    /**
    * n개만큼 x로 채운 후, x * (index + 1) 결과 배열로 return
    * Array(n).fill(x).map((value, index) => value * (index + 1))
    */
    return answer;
}
