function solution(arr) {
    const minNum = Math.min(...arr);
    const answer = arr.filter((value) => value !== minNum);
    
    return answer.length === 0 ? [-1] : answer;
}