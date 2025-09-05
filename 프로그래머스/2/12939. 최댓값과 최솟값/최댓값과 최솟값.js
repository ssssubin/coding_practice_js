function solution(s) {
    const answer = s.split(" ").sort((a, b) => Number(a) - Number(b));
    return `${answer[0]} ${answer[answer.length -1]}`;
}