function solution(a, b) {
    const answer = a.reduce((arr, cur, index) => arr + (cur * b[index]), 0);
    return answer;
}