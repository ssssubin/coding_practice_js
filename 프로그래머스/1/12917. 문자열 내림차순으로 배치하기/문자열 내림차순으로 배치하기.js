function solution(s) {
    const answer = s.split("").sort((a, b) => b.charCodeAt()-a.charCodeAt()).join("");
    return answer;
}