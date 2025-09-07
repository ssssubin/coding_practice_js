function solution(A,B){
    const sortedA = A.sort((a, b) => a - b);
    const sortedB = B.sort((a, b) => b - a);
    const answer = A.reduce((arr, cur, index) => arr + (cur * B[index]), 0);

    return answer;
}