function solution(s){
    let sum = 0;
    if(s[s.length - 1] === '(') return false;
    for(let i = 0; i < s.length; i++){
        if(s[i] === ')') sum += -1;
        else sum += 1;
        if(sum < 0) return false;
    }
    return sum === 0 ? true : false;
}