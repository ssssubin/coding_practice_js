function solution(n) {
    const list = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0) list.push(i);
    }
    
    return list.reduce((arr, i)=> arr + i, 0);
}