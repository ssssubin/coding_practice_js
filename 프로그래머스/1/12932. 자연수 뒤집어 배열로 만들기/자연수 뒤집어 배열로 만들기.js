function solution(n) {
    const answer = n
  .toString()
  .split("")
  .reverse()
  .map((value) => Number(value));
    return answer;
}