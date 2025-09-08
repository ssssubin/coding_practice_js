function solution(phone_number) {
    let answer = '';
    const pre = phone_number.substring(0, phone_number.length - 4).split("").forEach((value) => answer += "*");
    const end = phone_number.substring(phone_number.length - 4);
    
    return answer + end;
}