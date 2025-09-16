function solution(s) {
    if(s.length !== 4 && s.length !== 6){
        return false;
    }
    
    if(s.match(/[A-z]/g)) return false;
    return true;
}