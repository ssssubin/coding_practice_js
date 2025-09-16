function solution(price, money, count) {
    const arr = Array(count).fill(price);
    const sum = arr.reduce((acc, cur, index) => acc + cur * (index + 1), 0);
    const answer = money - sum;
    
    return answer < 0 ? Math.abs(answer) : 0;
}