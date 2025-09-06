function solution(absolutes, signs) {
    const changeSigns = signs.map((value) => value ? 1 : -1);
    const answer = absolutes.map((value, index) => value * changeSigns[index]).reduce((arr, cur) => arr + cur);
    return answer;
}