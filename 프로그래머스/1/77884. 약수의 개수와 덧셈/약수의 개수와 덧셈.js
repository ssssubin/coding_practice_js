function solution(left, right) {
    let answer = 0;
    const arr = Array.from(Array(right - left + 1).fill(left), (value, index) => value + index);
    arr.forEach((value, index) => {
        let cnt = 0;
        for(let i = 1; i <= value; i++){
            if(value % i === 0) cnt += 1;
        }
        answer += cnt % 2 === 0 ? value : (-1) * value;
    })
    return answer;
}