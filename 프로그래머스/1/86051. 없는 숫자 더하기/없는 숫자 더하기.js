function solution(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    let sum = 0;
    for(let i = 0; i <= 9 ; i++){
        sum += sortedNumbers.includes(i) ? 0 : i;
    }
    return sum;
}