function solution(absolutes, signs) {
    const changeSigns = signs.map((value) => value ? 1 : -1);
    const answer = absolutes.reduce((arr, cur, index) => arr + (cur * changeSigns[index]), 0);
    return answer;
}