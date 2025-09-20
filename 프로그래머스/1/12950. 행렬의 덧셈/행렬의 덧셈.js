function solution(arr1, arr2) {
    const answer = [];
    arr1.forEach((value1, index1) => {
        const arrValue = [];
        value1.forEach((value2, index2) => {
            arrValue.push(value2 + arr2[index1][index2]);
        });
       answer.push(arrValue); 
    });
    return answer;
}