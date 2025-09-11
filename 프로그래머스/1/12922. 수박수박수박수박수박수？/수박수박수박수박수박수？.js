function solution(n) {
    const watermelon = '수박';
    const answer = n % 2 !== 0 ? watermelon.repeat(Math.floor(n / 2)) + watermelon[0] : watermelon.repeat(n / 2);
    
    return answer;
}