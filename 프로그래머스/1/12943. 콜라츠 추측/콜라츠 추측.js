function solution(num) {
    let count = 0;
    let answer = num;
    while(count < 500){
        if(answer === 1) return count;
        if(answer % 2 === 0){
            answer = answer / 2;
            count++;
        }else{
            answer = answer * 3 + 1;
            count++;
        }
    }
    return -1;
}