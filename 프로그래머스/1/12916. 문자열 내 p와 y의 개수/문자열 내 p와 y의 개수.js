function solution(s){
    const p = Array.from(s.toLowerCase()).filter((value) => value === 'p').length;
    const y = Array.from(s.toLowerCase()).filter((value) => value === 'y').length;
    
    return p === y;
}